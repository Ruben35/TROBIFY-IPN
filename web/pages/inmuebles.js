import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Box, Button, Container, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton'
import FilterListIcon from '@material-ui/icons/FilterList';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import clsx from 'clsx';
import { useState } from 'react';
import ItemCard from '../components/basic/ItemCard';
import Snackbar from '@material-ui/core/Snackbar';
import useMediaQuery from '../utils/CustomHooks';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    filter_button: {
      height: theme.spacing(6),
    }
  }));

export default function Inmuebles({ dataServer }){
    const classes = useStyles();
    const [filtroOpen, setFiltro] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [snackType, setSnackType] = useState("session");
    const [dataInmuebles, setDataInmuebles ] = useState(dataServer);
    const [filter, setFilter] = useState('None');

    const isSmall = useMediaQuery("(max-width: 426px)");

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <Box bgcolor={filter==='None'?"#ef6c00":""}>
              <ListItem button onClick={()=>{filterData('None')}}>
                <ListItemIcon><FilterListIcon /></ListItemIcon>
                <ListItemText>Sin Filtro</ListItemText> 
              </ListItem>
            </Box>
          </List>
          <Divider />
          <List>
            <Box paddingLeft={2} paddingBottom={1}><Typography variant={"body1"} color="textSecondary"><b>Por tipo de transacción</b></Typography></Box>
            <Box bgcolor={filter==='Venta'?"#ef6c00":""}>
              <ListItem button onClick={()=>{filterData("Venta")}}>
                <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
                <ListItemText>Venta</ListItemText> 
              </ListItem>
            </Box>
            <Box bgcolor={filter==='Renta'?"#ef6c00":""}>
              <ListItem button onClick={()=>{filterData("Renta")}}>
                <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                <ListItemText>Renta</ListItemText> 
              </ListItem>
            </Box>
          </List>
        </div>
      );

      const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setFiltro(open);
      };

      const handleOpenSnackbar = (value) =>{
        setSnackType(value);
        setOpenSnack(true);
      } 

      const handleCloseSnackBar = ()=>{
        setOpenSnack(false);
      }

      const filterData = (value) =>{
        setFilter(value);
        if(value==='None'){
          setDataInmuebles(dataServer);
        }else{
          setDataInmuebles(dataServer.filter(elem=>{
            return elem.transaccion===value
          }))
        }
      }

    return (
        <>
            <Head>
                <title>Trobify: Inmuebles</title>
            </Head>
            {/* Filter Bar */}
            <SwipeableDrawer 
                    anchor={"left"}
                    open={filtroOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list("left")}
            </SwipeableDrawer>
            <Box minHeight="64px"></Box>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection={isSmall?"column":"row"} mt={2} mb={2} textAlign={isSmall?"center":""}>
                    <Box flexGrow={1}>
                      <Typography variant="h4" color="secondary">Inmuebles cerca de ti</Typography>
                    </Box>
                    <Button variant="contained" className={classes.filter_button} color="primary" onClick={toggleDrawer(true)}>
                        Ver filtros
                    </Button>
                </Box>
                <Box mt={2}>
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
                          <ItemCard 
                            title={inmueble.titulo}
                            description={inmueble.descripcion}
                            imgURL={inmueble.imgs[0]?inmueble.imgs[0].path:""}
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

export async function getServerSideProps(context) {

  try{
    const res = await axios.get(process.env.SERVER_URL+'/inmueble/inmuebles')
    const dataServer = res.data;
    return { props: { dataServer } }
  }catch(error){
    console.log(error);
    return { props: {} }
  }
}