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
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx';
import { useState } from 'react';
import ItemCard from '../components/basic/ItemCard';
import Snackbar from '@material-ui/core/Snackbar';

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

export default function Inmuebles({ dataInmuebles }){
    const classes = useStyles();
    const [filtroOpen, setFiltro] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [snackType, setSnackType] = useState("session");
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
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
                <Box display="flex" flexDirection="row" mt={2} mb={2}>
                    <Typography variant="h4" color="secondary">Inmuebles cerca de ti</Typography>
                </Box>
                <Box mt={2}>
                  <Box display="flex" alignItems="center" justifyContent="flex-end" mb={2}>
                    <Box flexGrow={1}>
                      <Button variant="contained" className={classes.filter_button} color="primary" onClick={toggleDrawer(true)}>
                        Ver filtros
                      </Button>
                    </Box>
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
    const dataInmuebles = res.data;
    return { props: { dataInmuebles } }
  }catch(error){
    console.log(error);
    return { props: {} }
  }
}