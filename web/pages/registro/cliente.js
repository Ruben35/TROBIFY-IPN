import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { useRef, useState } from 'react';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


export default function RegistroCliente() {

    return(
        <>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3}>
                    <Typography variant="h3" color="secondary">Registro Cliente</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={5}>
                        <Form/>                   
                    </Box>
                </Paper>
            </Container>
            <Box minHeight="64px"></Box>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  }));

const Form = () =>{
    const classes = useStyles();

    const [photoName, setPhotoName] = useState("Selecciona imagen...");
    const [imagePreview, setImagePreview] = useState();
    const photo = useRef();
    const [name, setName] = useState("");
    const [apPat, setApPat] = useState("");
    const [apMat, setApMat] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState(""); 
    const [confPswd,setConfPswd] = useState("");

    const changePhotoName= (e) =>{
        e.preventDefault();
        var name = photo.current.files[0].name;
        if(name.length>30)
            name=name.substring(0,30)+"..."
        setPhotoName(name);
        setImagePreview(
            <Box display="flex" justifyContent="center" marginBottom={2}><Avatar alt="Remy Sharp" src={URL.createObjectURL(photo.current.files[0])} className={classes.large} /></Box>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var error="";
        var isPhotoNoEmpty=photo.current.files.length!=1;
        if(photo.current.files.length!=1 && name=="" && apPat=="" && apMat=="" && email=="" && pswd=="" && confPswd==""){
            error="Seleccione una foto de perfil";
            alert("Faltan datos \n"+error);
        }else{
            alert("Todo ok")
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5">Datos Personales</Typography>
            <Divider/>
            <Box margin={3}>
                <Grid container spacing={5} justify="center" >
                    <Grid item> <TextField variant="outlined" value={name} onChange={(e)=>{setName(e.target.value)}} label="Nombre" helperText="Inserte un nombre" error /></Grid>
                    <Grid item> <TextField variant="outlined" value={apPat} onChange={(e)=>{setApPat(e.target.value)}} label="Apellido Paterno" /></Grid>
                    <Grid item> <TextField variant="outlined" value={apMat} onChange={(e)=>{setApMat(e.target.value)}} label="Apellido Materno" /></Grid>
                </Grid>
            </Box>
            <Typography variant="h5">Datos de Cuenta</Typography>
            <Divider/>
            <Box margin={3}>
                <Grid container spacing={5} justify="center" >
                    <Grid item> <TextField type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} variant="outlined" label="Correo" /></Grid>
                    <Grid item> <TextField type="password" value={pswd} onChange={(e)=>{setPswd(e.target.value)}} variant="outlined" label="Contraseña" /></Grid>
                    <Grid item> <TextField type="password" value={confPswd} onChange={(e)=>{setConfPswd(e.target.value)}} variant="outlined"label="Confirmar Contraseña" /></Grid>
                </Grid>
                <Box display="flex" justifyContent="center" alignItems="center" margin={3} flexWrap="wrap">
                    <Box marginRight={1} marginBottom={1}><Typography variant="body1" ><b>Foto de Perfil:</b> {photoName}</Typography></Box>
                    <Button
                        variant="contained"
                        component="label"
                        color="primary"
                    >
                        Subir Foto
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            ref={photo}
                            onChange={changePhotoName}
                        />
                    </Button>
                </Box>
                {imagePreview}
                <Box width="60%" margin="auto">
                    <Button variant="outlined" type={"submit"} fullWidth color="secondary">
                        Registrar
                    </Button>
                </Box>
            </Box>
        </form>     
    );
}