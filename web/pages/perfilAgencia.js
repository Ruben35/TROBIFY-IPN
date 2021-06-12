import { Button, Container, Divider, Grid, Paper, TextField, Typography, Snackbar } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Input from '@material-ui/core/Input';

export default function perfilAgencia() {
    const useStyles = makeStyles((theme) => ({
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
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
                <title>Su perfil</title>
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
                                <img src='/img/noimagePerfil.jpg' alt="noImage" className={classes.image}/>
                            </Grid>
                            <Grid className={classes.root} display="flex" alignItems="center" item xs>
                                <Input defaultValue="Nombre" disabled inputProps={{ 'aria-label': 'description' }} />

                                <Input defaultValue="Correo" disabled inputProps={{ 'aria-label': 'description' }} />
                                <Input defaultValue="Descripción" disabled inputProps={{ 'aria-label': 'description' }} />

                                <Input defaultValue="Telefono 1 de contacto" disabled inputProps={{ 'aria-label': 'description' }} />
                                <Input defaultValue="Telefono 2 de contacto" disabled inputProps={{ 'aria-label': 'description' }} />

                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            <Box minHeight="64px"></Box>
        </>
    );
};


