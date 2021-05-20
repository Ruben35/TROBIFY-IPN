import Head from 'next/head'
import {Box, Container, Typography, Divider, TextField, Paper ,
        Grid, RadioGroup, FormControlLabel, Radio, FormLabel, FormHelperText} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

export default function RegistrarInmueble(){

    return(
        <>
            <Head>
                <title>Trobify: Registrar Nuevo Inmueble</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3}>
                    <Typography variant="h3" color="secondary">Registra Inmueble</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={5}>
                        <FormNuevoInmueble/>
                    </Box>
                </Paper>
            </Container>
            <Box minHeight="64px"></Box>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    center: {
      display: "flex",
      justifyContent: "center",
      marginTop:theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    txtlarge:{
        flexGrow: 1,
    },
    txtsmall:{
        width: theme.spacing(18)
    }
  }));

const FormNuevoInmueble = ()=>{
    const classes = useStyles();

    //Form states
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [surface, setSurface] = useState("");
    const [nGarage, setNGarage] = useState("");
    const [nRooms, setNRooms] = useState("");
    const [nBathrooms, setNBathrooms] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    //Aux states
    const [isWrong, setIsWrong] = useState(false);
    const [isPropietary, setIsPropietary] = useState("Si");

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleNumber = (value,callback) =>{
        if(value>=0)
            callback(value);
    } 

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5">Datos de la Publicación</Typography>
            <Divider/>
            <div className={classes.center}>
                <TextField 
                className={classes.txtlarge}
                variant="outlined"
                label="Titulo de Publicación del Inmueble"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                error={(isWrong && title==="")}
                helperText={(isWrong && title==="")?"Escriba un titulo":""}
                />
            </div>
            <div className={classes.center}>
                <TextField 
                className={classes.txtlarge}
                variant="outlined"
                label="Descripción del inmueble"
                multiline
                rows={6}
                rowsMax={10}
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                error={(description.length>500 || (isWrong && description===""))}
                helperText={(description.length>500)?`${(description.length-500)} caracteres sobre 500`:
                            (isWrong && description==="")?"Escriba una descripción":""}
                />
            </div>
            <Typography variant="h5">Características</Typography>
            <Divider/>
            <Box padding={1}/>
            <Grid container spacing={5} justify="center" >
                    <Grid item> <TextField type="number" min={0} className={classes.txtsmall} variant="outlined" label="Superficie m²" value={surface} onChange={(e)=>{handleNumber(e.target.value, setSurface)}}   error={isWrong && surface===""} helperText={(isWrong && surface==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Garages" value={nGarage} onChange={(e)=>{handleNumber(e.target.value, setNGarage)}}   error={isWrong && nGarage===""} helperText={(isWrong && nGarage==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Cuartos" value={nRooms} onChange={(e)=>{handleNumber(e.target.value, setNRooms)}}   error={isWrong && nRooms===""} helperText={(isWrong && nRooms==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Baños" value={nBathrooms} onChange={(e)=>{handleNumber(e.target.value, setNBathrooms)}}   error={isWrong && nBathrooms===""} helperText={(isWrong && nBathrooms==="")?"Requerido":""} /></Grid>
            </Grid>
            <div className={classes.center}>
                <TextField 
                className={classes.txtlarge}
                variant="outlined"
                label="Más características"
                multiline
                rows={6}
                rowsMax={10}
                value={characteristics}
                onChange={(e)=>{setCharacteristics(e.target.value)}}
                error={(characteristics.length>500 || (isWrong && characteristics===""))}
                helperText={(characteristics.length>500)?`${(characteristics.length-500)} caracteres sobre 500`:""}
                />
            </div>
            <Box> 
                {/* FALTA AGREGAR ESTILOS PARA PONER DE LADO EL PROPIETARIO (GRID) */}
                <Box display="flex"
                    flexDirection="column"
                    justifyContent= "center"
                    alignItems= "center">       
                    <FormLabel component="legend">¿Es usted el propietario?</FormLabel>
                    <RadioGroup row value={isPropietary} onChange={(e)=>{setIsPropietary(e.target.value)}}>
                        <FormControlLabel value="Si" control={<Radio />} label="Sí" labelPlacement="bottom"/>
                        <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="bottom"/>
                    </RadioGroup>
                    <FormHelperText error></FormHelperText>
                </Box>
                <div className={classes.center}>
                        <TextField 
                        className={classes.txtlarge}
                        variant="outlined"
                        label="nombrePropietario"
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                        error={(isWrong && title==="")}
                        helperText={(isWrong && title==="")?"Escriba un titulo":""}
                        />
                </div>
            </Box>
        </form>
    );
}