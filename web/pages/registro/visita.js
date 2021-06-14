import { Button, Container, Divider, Grid, Paper, Typography, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box'
import { useRef, useState } from 'react';
import React from 'react';
import Head from 'next/head';
import OkDialog from '../../components/basic/OkDialog';
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import useUser from '../../utils/UserHook';
registerLocale('es', es)


export default function RegistroVisita() {

    return (
        <>
            <Head>
                <title>Trobify : Agendar Visita</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3}>
                    <Typography variant="h3" color="secondary">Registro de Visita</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={5}>
                        <Form />
                    </Box>
                </Paper>
            </Container>
            <Box minHeight="64px"></Box>
        </>
    );
};

const DatosHORA = ({handleStartDate, startDate}) => {
    return (
        <DatePicker selected={startDate} onChange={handleStartDate} showTimeSelect dateFormat="Pp" locale="es"/>
    );
};

const Form = () => {
    const router = useRouter();
    const {} = useUser();
    //Form values
    const [email, setEmail] = useState("solovino");
    const [inmueble, setInmueble] = useState("SuperInmueble");

    //Aux States
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState();
    const [successDialog, setSuccessDialog] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (e) => {
       console.log(e);
    }

    const handleChangeDate = (date) =>{
        if(date<(new Date())){
            setAlertMessage("Fecha menor a hoy");
            setOpen(true);
        }else{
            setStartDate(date)
            setOpen(false);
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
        router.back();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5">Datos de Usuario</Typography>
            <Divider />
            <Box margin={3}>
                <Grid container spacing={5} justify="center" >
                    <Grid item> <p>Se agendará una visita a <b> {inmueble}</b> para el siguiente correo : <b>{email}</b></p></Grid>
                </Grid>
            </Box>
            <Typography variant="h5">Registro</Typography>
            <Divider />
            <Box m={4} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Grid container spacing={5} justify="center" >
                    <Grid item>
                        
                        <Typography variant="h6">
                                Día y hora de la visita:{"  "}
                            <DatosHORA startDate={startDate} handleStartDate={handleChangeDate}/>
                        </Typography>

                    </Grid>
                </Grid>

                <Box width="60%" margin={3} >
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