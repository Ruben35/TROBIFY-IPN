import { Button, Container, Divider, Grid, Paper, TextField, Typography, Snackbar } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    const correo=context.query.correo;

    try{
        const res= await axios.get(process.env.SERVER_URL+"/auth/info/"+correo);
        if(res.data.ok){
            const data=res.data.info;
            const type=(data.rfc) ? "agencia" : "cliente";

            return {
                props: {type, data}
            }
        }else{
            throw new Error("No existe el correo");
        }
    }catch(er){
        console.error(er);
        const { res } = context;
        res.setHeader("location", "/404");
        res.statusCode = 302;
        res.end();
    }

    return {
        props: {}
    }
}


export default function perfil({type, data}){
    if(type==="agencia")
        return <PerfilAgencia data={data}/>;
    else
        return <PerfilCliente data={data}/>;
}

function PerfilAgencia({data}) {
    const router = useRouter();
    const { correo } = router.query;

    const useStyles = makeStyles((theme) => ({
        large: {
            width: theme.spacing(40),
            height: theme.spacing(40),
            boxShadow: "4px 7px 13px rgba(0, 0, 0, 0.24)"
        },
        txt: {
            flexGrow: 1,
        },
        root: {
            '& > *': {
              margin: theme.spacing(1),
            },
          },
        image:{
            width:"50%",
        }
        
    }));


    const classes = useStyles();

    return (
        <>
            <Head>
                <title>Perfil: {data.nombre}</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3}>
                    <Typography variant="h3" color="secondary">Datos de Agencia</Typography>
                </Box>
                <Paper elevation={5}>
                    <Box padding={4}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <Box display="flex" justifyContent="center" alignItems="center" height="90%">
                                <Avatar alt={data.nombre} src={process.env.SERVER_URL+"\\"+data.path} className={classes.large} />
                                </Box>
                            </Grid>
                            <Grid className={classes.root} item xs>
                                <Grid container spacing={1}>
                                    <Grid item >
                                        <Typography variant="h5" color="primary"> 
                                            <b>Nombre: </b>  
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h5"> 
                                            {data.nombre} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item >
                                        <Typography variant="h5" color="primary"> 
                                            <b>Correo: </b>  
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h5"> 
                                            {correo} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item >
                                        <Typography variant="h5" color="primary"> 
                                            <b>RFC: </b>  
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h5"> 
                                            {data.rfc} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="h5" color="primary"> 
                                    <b>Descripción: </b>  
                                </Typography>
                                <Box whiteSpace="pre-line">
                                    <Typography variant="body1"> 
                                        {data.descripcion} 
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            <Box minHeight="64px"></Box>
        </>
    );
};

function PerfilCliente({data}) {
    const router = useRouter();
    const { correo } = router.query;

    const useStyles = makeStyles((theme) => ({
        large: {
            width: theme.spacing(40),
            height: theme.spacing(40),
            boxShadow: "4px 7px 13px rgba(0, 0, 0, 0.24)"
        },
        txt: {
            flexGrow: 1,
        },
        root: {
            '& > *': {
              margin: theme.spacing(1),
            },
          },
        image:{
            width:"50%",
        }
        
    }));


    const classes = useStyles();

    return (
        <>
            <Head>
                <title>Perfil: {data.nombre}</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3}>
                    <Typography variant="h3" color="secondary">Datos de Cliente</Typography>
                </Box>
                <Paper elevation={5}>
                    <Box padding={4}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                <Avatar alt={data.nombre} src={process.env.SERVER_URL+"\\"+data.path} className={classes.large} />
                                </Box>
                            </Grid>
                            <Grid className={classes.root} item xs>
                                <Grid container spacing={1}>
                                    <Grid item >
                                        <Typography variant="h5" color="primary"> 
                                            <b>Nombre: </b>  
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h5"> 
                                            {data.nombre} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item >
                                        <Typography variant="h5" color="primary"> 
                                            <b>Apellido Paterno: </b>  
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h5"> 
                                            {data.apPaterno} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item >
                                        <Typography variant="h5" color="primary"> 
                                            <b>Apellido Materno: </b>  
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h5"> 
                                            {data.apMaterno} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item >
                                        <Typography variant="h5" color="primary"> 
                                            <b>Correo: </b>  
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h5"> 
                                            {correo} 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            <Box minHeight="64px"></Box>
        </>
    );
};