import { Button, Container, Divider, Grid, Paper, TextField, Typography, Snackbar } from '@material-ui/core'
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





const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat="Pp"/>
    );
};


const Form = () => {
    const router = useRouter();
    //Form values
    const [email, setEmail] = useState("solovino");
    const [inmueble, setInmueble] = useState("SuperInmueble");
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState();
    const [successDialog, setSuccessDialog] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        var isPhotoNoEmpty = photo.current.files.length != 1;
        if (photo.current.files.length != 1 || name === "" || apPat === "" || apMat === "" || email === "" || pswd === "" || confPswd === "" || pswd != confPswd) {
            if (photo.current.files.length != 1)
                setAlertMessage("Selecciona una foto");
            else
                setAlertMessage("Datos incompletos")
            setIsWrong(true);
            setOpen(true);

        } else {
            setIsWrong(false);
            setSuccessDialog(true);
        }
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleOnOk = () => {
        setSuccessDialog(false);
        router.push("/");
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
            <Box m={4}>
                <Grid container spacing={5} justify="center" >
                    <Grid item>
                        Día y hora de la visita : 
                        <Example></Example>


                    </Grid>
                </Grid>

                <Box width="60%" margin="auto">
                    <Button variant="outlined" type={"submit"} fullWidth color="secondary">
                        Registrar
                    </Button>
                </Box>
            </Box>
          
        </form>
    );
}