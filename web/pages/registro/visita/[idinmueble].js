import { Button, Container, Divider, Grid, Paper, Typography, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box'
import { useRef, useState } from 'react';
import React from 'react';
import Head from 'next/head';
import OkDialog from '../../../components/basic/OkDialog';
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import useUser from '../../../utils/UserHook';
import cookies from 'next-cookies'
import axios from 'axios'
registerLocale('es', es)


export default function RegistroVisita( { inmuebleData } ) {

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
                        <Form inmuebleId={inmuebleData.idinmueble} inmuebleTitulo={inmuebleData.titulo} propietario={inmuebleData.propietario}/>
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

const Form = ({inmuebleId, inmuebleTitulo, propietario}) => {
    const router = useRouter();
    const { userEmail } = useUser();
    //Form values

    //Aux States
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState();
    const [successDialog, setSuccessDialog] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res= await axios({
                method: "post",
                url:  process.env.SERVER_URL+"/inmueble/visita/agendar",
                data: {
                    fecha_visita:startDate.toLocaleString("es-US"),
                    inmueble_id:inmuebleId,
                    cliente_correo: userEmail
                }
            })
            setSuccessDialog(true);
        }catch(er){
            setAlertMessage("Error en servidor");
        }
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
                    <Grid item> <p>Se agendará una visita a <b> "{inmuebleTitulo}"</b> para el siguiente correo : <b>{userEmail}</b></p></Grid>
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
                    title={`¡Visita Agendada Exitosamente!`}
                    message={`Tu visita ha sido registrada, el propietario "${propietario}" se comunicará contigo para confirmar la cita.`}
                    onOk={handleOnOk}/>
        </form>
    );
}

export async function getServerSideProps(context) {
    const jwt=cookies(context).jwt
    const type=cookies(context).type;
    if(jwt && type==="cliente"){ //logged and client?
        const idInmueble=context.query.idinmueble;
        try{
            const resInmuebleUnit= await axios.get(process.env.SERVER_URL+'/inmueble/unitario/'+idInmueble);
            if(!resInmuebleUnit.data.ok){
                throw new Error("No existe el inmueble");
            }
            const inmuebleData= resInmuebleUnit.data.data;

            return {
                props: { inmuebleData }
            }
        }catch(er){
            const { res } = context;
            res.setHeader("location", "/404");
            res.statusCode = 302;
            res.end();
        }
    }else{
        const { res } = context;
        res.setHeader("location", "/");
        res.statusCode = 302;
        res.end();
    }

    return {
        props: {}
    }
}