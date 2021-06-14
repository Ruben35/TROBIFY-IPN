import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Paper, Typography, Grid, TextField, 
    FormControl, InputLabel, Select, MenuItem, Button, Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import OkDialog from '../../components/basic/OkDialog';
import { makeStyles } from '@material-ui/core/styles';
import cookies from 'next-cookies'
import axios from 'axios';
import { FormHelperText } from '@material-ui/core';
import { useRouter } from 'next/router';

export default function RegistrarServcio( { servicios } ){

    return(
        <>
            <Head>
                <title>Trobify: Registrar Nuevo Servicio</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3} textAlign="center">
                    <Typography variant="h3" color="secondary">Registrar Servicio</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={5}>
                        <FormServicio servicios={servicios}/>
                    </Box>
                </Paper>
            </Container>
            <Box minHeight="64px"></Box>
        </>
    );
}

const FormServicio = ( { servicios } )=>{ 

    const useStyles = makeStyles((theme) => ({
        txtLarge: {
            margin: theme.spacing(1),
            width: "100%",
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: "100%",
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        largeBtn: {
            width: "50%"
        }
    }));

    const classes= useStyles();
    const router = useRouter();

    //States
    const [cp, setCP] = useState("");
    const [servicio, setServicio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    //AuxStates
    const [serviciosList, setServiciosList] = useState(servicios);
    const [isWrong, setIsWrong] = useState(false);
    const [open, setOpen] = useState(false);
    const [successDialog, setSuccessDialog] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(()=>{
        setServiciosList(servicios.sort((a,b)=>{return a.servicio>b.servicio?1:-1}));
    },[])

    const handleCP = (e) =>{
        if(e.target.value.length<=5){
            setCP(e.target.value);
        }
    }

    const hanldeInputE = (evt) => evt.key === 'e' && evt.preventDefault();

    const registerService= async () =>{
        try{
            const res= await axios(
                {
                    method: "post",
                    url: process.env.SERVER_URL+"/inmueble/registrarServicio",
                    data: {
                        servicio:servicio,
                        descripcion:descripcion,
                        zona:cp
                    },
                }
            );
            if(res.data.ok){
                setSuccessDialog(true);
            }else{
                throw new Error("No CP")
            }
        }catch(er){
            console.log(er);
            setOpen(true);
            if(er.message==="No CP"){
                setAlertMessage("CP desconocido, registre un inmueble con ese CP primero...")
            }else{
                setAlertMessage("Error en servidor")
            }
        }
        
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        if(cp==="" || servicio==="" || descripcion===""){
            setOpen(true);
            setIsWrong(true);
            setAlertMessage("Error en los datos")
        }else{
            registerService();
        }
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleOnOk = () =>{
        setSuccessDialog(false);
        router.push("/inmuebles/gestionInmueble");
    }

    return (
        <form onSubmit={handleSumbit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm>
                    <TextField 
                     label="Código Postal de la Zona"
                     variant="outlined"
                     type="number"
                     className={classes.txtLarge}
                     value={cp}
                     onChange={handleCP}
                     onKeyDown={hanldeInputE}
                     error={isWrong && cp===""}
                     helperText={isWrong && cp===""?"Llene este campo":""}
                    />
                </Grid>
                <Grid item xs md>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel> Tipo de Servicio</InputLabel>
                        <Select
                         value={servicio}
                         onChange={(e)=> setServicio(e.target.value)}
                         label="Tipo de Servicio"
                         error={isWrong && servicio===""}
                         helperText={isWrong && servicio===""?"Seleccione un servicio":""}
                        >
                            {
                                serviciosList.map(serv => {
                                    return (
                                        <MenuItem value={serv} key={serv}>{serv}</MenuItem>
                                    );
                                })
                            }
                        </Select>
                        <FormHelperText error={isWrong} >{isWrong && servicio===""?"Seleccione un servicio":""}</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Box marginTop={2}>
                <TextField 
                 label="Descripción"
                 variant="outlined"
                 className={classes.txtLarge}
                 value={descripcion}
                 error={(descripcion.length>100) || (isWrong && descripcion==="")}
                 helperText={(isWrong && descripcion==="")?"Llene este campo":(descripcion.length>100)?`${(descripcion.length-100)} caracteres sobre 100`:""}
                 multiline
                 rows={3}
                 rowsMax={4}
                 onChange={(e)=>setDescripcion(e.target.value)}
                />
            </Box>
            <Box marginTop={3} display="flex" justifyContent="center">
                <Button type="submit" variant="contained" color="primary" className={classes.largeBtn} size="large">
                    Registrar
                </Button>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical:"bottom", horizontal:"right"}} onClose={handleAlertClose}>
                <Alert severity="error" variant="filled" onClose={handleAlertClose}>
                    {alertMessage}
                </Alert>
            </Snackbar>
            <OkDialog open={successDialog} 
                    title={`¡Registro exitoso de servicio de ${servicio}!`}
                    message={`El nuevo servicio se ha guardado correctamente y será visible en los inmuebles de la zona indicada con el código postal.`}
                    onOk={handleOnOk}/>
        </form>
    );
}

export async function getServerSideProps(context) {
    if(!cookies(context).jwt){ //Reload?
        const { res } = context;
        res.setHeader("location", "/");
        res.statusCode = 302;
        res.end();
    }

    let servicios;
    try{
        const res = await axios.get(process.env.SERVER_URL+"/inmueble/servicios");
        servicios=res.data.servicios;
    }catch{
        servicios=[];
    }
    return {
      props: { servicios },
    }
  }