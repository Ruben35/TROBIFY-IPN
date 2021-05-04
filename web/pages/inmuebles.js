import Head from 'next/head'
import { Box, Button, Container, Grid, ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { useState } from 'react';
import ItemCard from '../components/basic/ItemCard';
import { spacing } from '@material-ui/system';
import Pagination from '../components/basic/PaginationBar'
import PaginationBar from '../components/basic/PaginationBar';

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

export default function Inmuebles(){
    const classes = useStyles();

    const [filtroOpen, setFiltro] = useState(false);
    
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
                  <PaginationBar count={10} page={2}/>
                  </Box>
                  <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={5}>
                    <Grid item>
                      <ItemCard/>
                    </Grid>
                    <Grid item>
                      <ItemCard/>
                    </Grid>
                    <Grid item>
                      <ItemCard/>
                    </Grid>
                    <Grid item>
                      <ItemCard/>
                    </Grid>
                    <Grid item>
                      <ItemCard/>
                    </Grid>
                  </Grid>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" mt={2} mb={2}>
                  <PaginationBar count={10} page={2}/>
                </Box>
            </Container>
        </>
    );
}