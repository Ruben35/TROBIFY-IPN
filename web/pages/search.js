import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Box, Button, Container, Grid, Typography, Snackbar, IconButton} from '@material-ui/core';
import ItemCard from '../components/basic/ItemCard';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';

export default function Search( { dataInmuebles } ){
    const router = useRouter();
    const search = router.query.titulo;

    //Aux states
    const [openSnack, setOpenSnack] = useState(false);
    const [snackType, setSnackType] = useState("session");

    const handleOpenSnackbar = (value) =>{
        setSnackType(value);
        setOpenSnack(true);
    } 

    const handleCloseSnackBar = ()=>{
        setOpenSnack(false);
    }
    
    return (
        <>
            <Head>
                <title>Búsqueda de: {search}</title>
            </Head>
            <Box minHeight="64px"/>
            <Container maxWidth="lg">
            <Box display="flex" flexDirection="row" mt={2} mb={2} textAlign="center">
                    <Typography variant="h4" color="secondary">{dataInmuebles.length} Resultados de Búsqueda de "{search}"</Typography>
            </Box>
            <Box mt={2}>
            <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={5}>
                      {/* ITEMS */}
                    {
                      (dataInmuebles===[] || dataInmuebles===undefined)?
                      <Box display="flex" alignItems="center" justifyContent="center" height="60vh">
                        <Typography variant="h3" color="textSecondary">No hay datos</Typography>
                      </Box>
                      :
                      dataInmuebles.map((inmueble)=>{
                        return (
                        <Grid item key={inmueble.idinmueble}>
                          <ItemCard 
                            title={inmueble.titulo}
                            description={inmueble.descripcion}
                            imgURL={inmueble.path}
                            idInmueble={inmueble.idinmueble}
                            openSnackbar={handleOpenSnackbar}
                          />
                        </Grid>
                        );
                      })
                    }  
                  </Grid>
            </Box>
            </Container>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={openSnack}
              autoHideDuration={3000}
              onClose={handleCloseSnackBar}
              message={snackType==="session"?"Inicia sesión para agregar a favoritos":"Solo clientes tienen favoritos"}
              action={
                <React.Fragment>
                  {snackType==="session"?
                  <Link href="/signin">
                    <Button color="secondary" size="small" onClick={handleCloseSnackBar}>
                      SIGN IN
                    </Button>
                  </Link>:""
                  }
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackBar}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
        </>
    );
}

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

export async function getServerSideProps(context) {
    try{
        const { titulo } = context.query;
        if(titulo===undefined)
            throw new Error("No title");

        const res = await axios.get(`${process.env.SERVER_URL}/inmueble/buscar/*/${titulo}/1`)
        const dataInmuebles = getUniqueListBy(res.data, 'idinmueble')
        
        return {
            props: {
                dataInmuebles
            }
        }
    }catch(er){
        console.log(er);
        const { res } = context;
        res.setHeader("location", "/404");
        res.statusCode = 302;
        res.end();
    }

    return {
      props: { },
    }
  }