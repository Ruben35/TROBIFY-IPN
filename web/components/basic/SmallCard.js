import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Button, Hidden } from '@material-ui/core';
import useMediaQuery from '../../utils/CustomHooks'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete'
import {Box} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: theme.spacing(70)
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    maxWidth: theme.spacing(50),
    paddingBottom: 0
  },
  cover: {
    width: theme.spacing(20),
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function SmallCard({title, description, deleteFav}){
    const classes = useStyles();
    const theme = useTheme();
    const isCellPhone= useMediaQuery();

    return(
        <Card className={classes.root}>
            <Hidden only="xs">
                <CardMedia
                    className={classes.cover}
                    image="/img/landing/carrusel0.jpg"
                    title="Live from space album cover"
                />
            </Hidden>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h6">
                    {title?title:"Titulo de Inmueble"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {description?
                    (description.length>200?description.substring(0,197)+"...":description)
                    :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet consectetur lectus. Vestibulum nulla ipsum, vestibulum sit amet lacus sollicitudin, laoreet suscipit lorem. Nullam ac libero."}
                </Typography>
                </CardContent>
                    <Box display="flex"  padding={2} width="100%">
                        {deleteFav?
                        <Button startIcon={<DeleteIcon/>} variant="outlined" color="primary">Eliminar Completamente</Button>
                        :
                        <Button startIcon={<FavoriteBorderIcon/>} variant="outlined" color="primary" >Eliminar de Favoritos</Button>
                        }   
                        <Box display="flex" flexGrow={1} justifyContent="flex-end">
                            <Button color="primary" variant="text">Ver más...</Button>
                        </Box>
                    </Box>
            </div>
            </Card>
            // Agregar Dialog
    );
}