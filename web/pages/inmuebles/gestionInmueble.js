import Head from 'next/head'
import { Box, Button, Container, Grid, Link, ThemeProvider, Typography } from '@material-ui/core';
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
import cookies from 'next-cookies';
import axios from 'axios';


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

export default function gestion( { dataInmuebles } ) {
    const classes = useStyles();
    const CardGestion = ({ title, description, idInmueble , imgURL}) => {

        const img= (imgURL!="" && imgURL!=undefined)?process.env.SERVER_URL+"\\"+imgURL:"/img/landing/carrusel0.jpg";

        return (<Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Titulo de Inmueble"
                    height="140"
                    image={img}
                    title="Titulo de Inmueble"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title?title:"Titulo del Inmueble"} </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {description?
                    (description.length>200)?description.substring(0,197)+"..."
                        :description
                    :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet consectetur lectus. Vestibulum nulla ipsum, vestibulum sit amet lacus sollicitudin, laoreet suscipit lorem. Nullam ac libero eros."}
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
                    <Box flexGrow={1}>
                        <Typography variant="h4" color="secondary">Tus inmuebles</Typography>
                    </Box>
                    <Link href="/inmuebles/registrar">
                        <Button variant="contained" size="large" color="secondary">Registrar Nuevo Inmueble</Button>
                    </Link>
                </Box>
                <Box mt={2}>
                    <Box display="flex" alignItems="center" justifyContent="flex-end" mb={2}>
                    </Box>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={5}>
                     {/* ITEMS */}
                     {
                      (dataInmuebles===undefined)?
                      <Box display="flex" alignItems="center" justifyContent="center" height="60vh">
                        <Typography variant="h3" color="textSecondary">No hay datos</Typography>
                      </Box>
                      :
                      dataInmuebles.map((inmueble)=>{
                        return (
                        <Grid item key={inmueble.idinmueble}>
                            <CardGestion
                                title={inmueble.titulo}
                                description={inmueble.descripcion}
                                imgURL={inmueble.imgs[0]?inmueble.imgs[0].path:""}
                                idInmueble={inmueble.idinmueble}
                            />
                        </Grid>
                        );
                      })
                    }  
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const jwt=cookies(context).jwt
    const email=cookies(context).email;
    const type=cookies(context).type;
    if(jwt){ //logged?
        var reqURL=process.env.SERVER_URL;
        if(type==="cliente")
            reqURL+=`/inmueble/inmueblesCliente/${email}`;
        else
            reqURL+=`/inmueble/inmueblesAgencia/${email}`;
        try{
            const res = await axios({
                method: "get",
                url: reqURL,
              });
            
            const dataInmuebles = res.data;

            return { props: { dataInmuebles }}  
        }catch(error){
            console.error(error);
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