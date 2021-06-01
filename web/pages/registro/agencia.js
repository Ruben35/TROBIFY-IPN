import { Button, Container, Divider, Grid, Paper, TextField, Typography, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box'
import { useRef, useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Head from 'next/head';
import OkDialog from '../../components/basic/OkDialog';
import { useRouter } from 'next/router'
import axios from 'axios'


export default function RegistroCliente() {

    return(
        <>
            <Head>
                <title>Trobify: Registro Agencia Inmobiliaria</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3}>
                    <Typography variant="h3" color="secondary">Registro Agencia Inmobiliaria</Typography>
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
    txt:{
        flexGrow: 1,
    }
  }));

const Form = () =>{
    const classes = useStyles();
    const router = useRouter();
    //Form values
    const photo = useRef();
    const [name, setName] = useState("");
    const [rfc, setRFC] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState(""); 
    const [confPswd,setConfPswd] = useState("");
    //Aux states
    const [photoName, setPhotoName] = useState("Selecciona imagen...");
    const [imagePreview, setImagePreview] = useState();
    const [isWrong, setIsWrong] = useState(false);
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState();
    const [successDialog, setSuccessDialog] = useState(false);

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

    const hanldeRFC = (value) =>{
        if(value.length<=13){
            setRFC(value.toUpperCase());
        }
    }

    const registerAgencia= ()=>{
        var bodyFormData = new FormData();
        bodyFormData.append('nombre', name);
        bodyFormData.append('correo', email);
        bodyFormData.append('rfc', rfc);
        bodyFormData.append('descripcion', description);
        bodyFormData.append('contrasena', pswd);
        bodyFormData.append('image', photo.current.files[0]);
        
        axios({
            method: "post",
            url: process.env.SERVER_URL+"/agencia/registrar",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data"}
        })
        .then((res) =>{
            setSuccessDialog(true);
        })
        .catch((ex) =>{
            console.log(ex.response);
            if(ex.response){
                setAlertMessage("El correo ya existe en el sistema");
            }else{
                setAlertMessage("Error de servidor: Intente nuevamente más tarde");
            }
            setOpen(true);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(photo.current.files.length!=1 || name==="" || rfc==="" || description==="" || description.length>500 || email==="" || pswd==="" || pswd.length<8 || confPswd==="" || pswd!=confPswd){
            if(photo.current.files.length!=1)
                setAlertMessage("Selecciona una foto");
            else
                setAlertMessage("Datos incompletos")
            setIsWrong(true);
            setOpen(true);
            
        }else{
            setIsWrong(false);
            registerAgencia();
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
        router.push("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5">Datos de la Agencia</Typography>
            <Divider/>
            <Box margin={3}>
                <Grid container spacing={5} justify="center" >
                    <Grid item> <TextField variant="outlined" error={isWrong && name===""} value={name} onChange={(e)=>{setName(e.target.value)}} label="Nombre de la Agencia" helperText={(isWrong && name==="")?"Escriba el nombre de la agencia":""} /></Grid>
                    <Grid item> <TextField variant="outlined" error={isWrong && rfc===""} value={rfc} onChange={(e)=>{hanldeRFC(e.target.value)}} label="RFC" helperText={(isWrong && rfc==="")?"Escriba el RFC":""} /></Grid>
                </Grid>
                <Box marginTop={3} display="flex" justifyContent="center">
                    <TextField
                    label="Descripción de empresa"
                    className={classes.txt}
                    multiline
                    rows={6}
                    rowsMax={10}
                    variant="outlined"
                    onChange={(e)=>{setDescription(e.target.value)}}
                    error={(description.length>500 || (isWrong && description===""))}
                    helperText={(description.length>500)?`${(description.length-500)} caracteres sobre 500`:
                                (isWrong && description==="")?"Escriba una descripción":""}
                    />
                </Box>
            </Box>
            <Typography variant="h5">Datos de Cuenta</Typography>
            <Divider/>
            <Box margin={3}>
                <Grid container spacing={5} justify="center" >
                    <Grid item> <TextField type="email" error={isWrong && email===""} value={email} onChange={(e)=>{setEmail(e.target.value)}} variant="outlined" label="Correo" helperText={(isWrong && email==="")?"Escriba su correo":""} /></Grid>
                    <Grid item> <TextField type="password" error={isWrong && (pswd==="" || pswd.length<8)} value={pswd} onChange={(e)=>{setPswd(e.target.value)}} variant="outlined" label="Contraseña" helperText={(isWrong && pswd==="")?"Escriba su contraseña":(isWrong && pswd.length<8)?"Contraseña menor a 8 caracteres":""} /></Grid>
                    <Grid item> <TextField type="password" error={isWrong && (confPswd==="" || confPswd != pswd)} value={confPswd} onChange={(e)=>{setConfPswd(e.target.value)}} variant="outlined" label="Confirmar Contraseña" 
                                helperText={(isWrong && confPswd==="")?"Confirme su contraseña":((isWrong && confPswd!=pswd)?"Las contraseñas no coinciden":"")} /></Grid>
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
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical:"bottom", horizontal:"right"}} onClose={handleAlertClose}>
                <Alert severity="error" variant="filled" onClose={handleAlertClose}>
                    {alertMessage}
                </Alert>
            </Snackbar>
            <OkDialog open={successDialog} 
                    title={`¡Registro Exitoso Agencia ${name}!`}
                    message={`Hemos enviado un correo a "${email}" para poder confirmar tu cuenta.`}
                    onOk={handleOnOk}/>
        </form>     
    );
}