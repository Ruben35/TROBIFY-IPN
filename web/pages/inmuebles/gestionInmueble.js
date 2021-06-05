import Head from 'next/head'
import { Box, Button, Container, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { spacing } from '@material-ui/system';
import PaginationBar from '../../components/basic/PaginationBar';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    button: {
        flexGrow: 1,
    },
    colorRed: {
        color: '#f44336',
    }
}));

export default function gestion() {
    const classes = useStyles();
    const CardGestion = ({ }) => {
        return (<Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Titulo de Inmueble"
                    height="140"
                    image="/img/landing/carrusel0.jpg"
                    title="Titulo de Inmueble"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Titulo de Inmueble </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet consectetur lectus. Vestibulum nulla ipsum, vestibulum sit amet lacus sollicitudin, laoreet suscipit lorem. Nullam ac libero eros.
              </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="large" color="primary" variant="outlined">
                    Ver
                </Button>
                <Button size="large" color="secondary" variant="outlined">
                    Editar
                </Button>
                <div className={classes.button}>
                    <IconButton className={classes.colorRed}>
                        <DeleteOutlinedIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>);
    }
    return (
        <>
            <Head>
                <title>Gestión de Inmuebles TROBIFY</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection="row" mt={2} mb={2}>
                    <Typography variant="h4" color="secondary">Tus inmuebles</Typography>
                </Box>
                <Box mt={2}>
                    <Box display="flex" alignItems="center" justifyContent="flex-end" mb={2}>
                    </Box>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={5}>
                        <Grid item>
                            <CardGestion></CardGestion>
                        </Grid>
                        <Grid item>
                            <CardGestion></CardGestion>
                        </Grid>
                        <Grid item>
                            <CardGestion></CardGestion>
                        </Grid>
                        <Grid item>
                            <CardGestion></CardGestion>
                        </Grid>
                        <Grid item>
                            <CardGestion></CardGestion>
                        </Grid>
                        <Grid item>
                            <CardGestion></CardGestion>
                        </Grid>

                    </Grid>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" mt={2} mb={2}>
                    <PaginationBar count={10} page={1} />
                </Box>
            </Container>
        </>
    );
}