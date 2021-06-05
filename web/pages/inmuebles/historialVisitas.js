import Head from 'next/head'
import { Box, Button, Container, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { spacing } from '@material-ui/system';
import PaginationBar from '../../components/basic/PaginationBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Divider from '@material-ui/core/Divider';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

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

export default function Historial() {
    const classes = useStyles();
    const CardVisita = ({ }) => {
        return (
            <Card className={classes.root}>
               
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Cliente Filiberto
                        </Typography>
                        <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}>
                        <Grid item>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Fecha: 26-04-2000
                        </Typography>
                        </Grid>
                        <Grid item> 
                        <Typography variant="body2" color="textSecondary" component="p">
                            Hora: 24:00 Hrs
                        </Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
            
                <CardActions>
                <Button size="large" color="primary" endIcon={<SmsOutlinedIcon/>} >
                    Responder   

                </Button>
                <Button size="large" className={classes.colorRed} endIcon={<DeleteOutlinedIcon/>} >
                   Eliminar   
                </Button>
            </CardActions>

            </Card>);
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
                <Box m={4} p={2}>
                    <Typography variant="h5" className={classes.subTitle}>Inmueble 1</Typography>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        
                    </Grid>
                </Box>
                <Divider/>
                <Box m={4} p={2}>
                    <Typography variant="h5" className={classes.subTitle}>Inmueble 2</Typography>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                        <Grid item>
                            <CardVisita></CardVisita>
                        </Grid>
                    </Grid>
                </Box>
                <Divider/>
                <Box display="flex" alignItems="center" justifyContent="center" mt={2} mb={2}>
                    <PaginationBar count={10} page={1} />
                </Box>
            </Container>
        </>
    );
}