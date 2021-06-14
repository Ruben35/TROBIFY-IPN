import Head from 'next/head'
import { Box, Button, Container, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { spacing } from '@material-ui/system';
import PaginationBar from '../../components/basic/PaginationBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Divider from '@material-ui/core/Divider';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import useUser from '../../utils/UserHook';
import cookies from 'next-cookies'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    button: {
        flexGrow: 1,
    },
    colorRed: {
        color: '#f44336',
    },
    subTitle:{
        color: '#2c387e'
    }

}));

export default function Historial( { data } ) {
    const classes = useStyles();

    const [historial, setHistorial] = useState([]);
    
    const formatDataFromServer = (serverData) => {
    
        const newData= [];
        let elem = new Object();
        elem.inmueble=serverData[0].titulo;
        elem.visitas=[];
        for(let visita of serverData){
            console.log("1")
            if(elem.inmueble!==visita.titulo){
                newData.push(elem);
                let elem = new Object();
                elem.inmueble=visita.titulo;
                elem.visitas=[];
            }
            const visit ={
                nombre: `${visita.nombre} ${visita.apPaterno}`,
                correo: visita.correo,
                fecha: visita.fecha,
                status: visita.status,
            }
            elem.visitas.push(visit);
        }
        newData.push(elem);

        return newData;
    }

    useEffect(()=>{
        setHistorial(formatDataFromServer(data));
    }, [])


    const CardVisita = ({ nombre, fecha, correo, status}) => {
        return (
            <Box margin={2}>
                <Card className={classes.root}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {nombre}
                            </Typography>
                            <Box display="flex" flexDirection="column">
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {fecha}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {correo}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Status:</b>{status===0?" Sin aceptar visita":""}
                                </Typography>
                            </Box>
                        </CardContent>
                    <CardActions>
                    <Button size="large" color="primary" endIcon={<SmsOutlinedIcon/>} >
                        Responder   
                    </Button>
                    <Button size="large" className={classes.colorRed} endIcon={<DeleteOutlinedIcon/>} >
                    Eliminar   
                    </Button>
                </CardActions>
                </Card>
            </Box>);
    }
    return (
        <>
            <Head>
                <title>Historial Visitas</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="row" mt={2} mb={2}>
                    <Typography variant="h4" color="secondary">Historial de Visitas</Typography>
                </Box>
                { 
                    historial.map(inmueble => {
                        return (
                            <>
                            <Box m={4} p={2} marginBottom={2}>
                            <Typography variant="h5" className={classes.subTitle}>Inmueble: {inmueble.inmueble} </Typography>
                            <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}>
                                {
                                    inmueble.visitas.map( visita =>{
                                        return (
                                            <Grid item>
                                                <CardVisita
                                                nombre={visita.nombre}
                                                fecha={visita.fecha}
                                                correo={visita.correo}
                                                status={visita.status}
                                                />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                            </Box>
                            <Divider/>
                            </>
                        )
                    })
                }
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const jwt=cookies(context).jwt
    const email=cookies(context).email;
    const type=cookies(context).type;
    if(jwt){ //logged?
        try{
            const res = await axios.get( process.env.SERVER_URL+"/inmueble/historialVisitas/"+email);
            
            if(!res.data.ok){
                throw new Error("Usuario no existe")
            }

            const data = res.data.respuesta;

            return { props: { data }}  
        }catch(error){
            console.error(error);
            const { res } = context;
            res.setHeader("location", "/");
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
      props: {},
    }
}