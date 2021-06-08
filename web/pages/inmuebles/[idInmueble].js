import Head from 'next/head'
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imgPort: {
        width: "100%",
        borderRadius: "10px",
        boxShadow: "4px 7px 13px rgba(0, 0, 0, 0.24)",
    },
}));


export default function verInmueble(){
    const router = useRouter();
    const { idInmueble } = router.query;
    const classes = useStyles();

    //States
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [surface, setSurface] = useState("");
    const [nGarage, setNGarage] = useState("");
    const [nRooms, setNRooms] = useState("");
    const [nBathrooms, setNBathrooms] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const [propietaryName, setPropietaryName] = useState("");
    const [calle, setCalle] = useState("");
    const [numExt, setNumExt] = useState("");
    const [numInt, setNumInt] = useState("");
    const [colonia, setColonia] = useState("");
    const [cp, setCP] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [estado, setEstado] = useState("");
    const [tipoTransaccion, setTipoTransaccion] = useState(1);
    const [precio, setPrecio] = useState("");

    return (
        <>
            <Head>
                <title>Trobify: Ver Inmueble \"{title}\"</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" textAlign="center" marginTop={1}>
                    <Typography variant="h3">Titulo del Inmueble</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={3}>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
                                <Box width="100%" height="auto">
                                    <img src="/img/landing/carrusel0.jpg" className={classes.imgPort}/>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box width="100%" height="auto">
                                    lo demas
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}