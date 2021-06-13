import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Hidden } from '@material-ui/core';
import useMediaQuery from '../../utils/CustomHooks'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete'
import {Box} from '@material-ui/core'
import axios from 'axios'
import YesNoDialog from './YesNoDialog';
import useFavourite from '../../utils/favouriteHooks';
import { useRouter } from 'next/router'

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

export default function SmallCard({deleteFav, idFav}){
    const classes = useStyles();
    const router = useRouter();
    const {trashFavourite, deleteFromTrash} = useFavourite();

    //States
    const [title, setTitle] = useState(null);
    const [description, setDescription ] = useState(null);
    const [imageURL, setImageURL] = useState("/img/landing/carrusel0.jpg");

    //AuxStates
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(async ()=>{
      if(idFav){
        const res = await axios.get(process.env.SERVER_URL+"/inmueble/unitario/"+idFav);
        setTitle(res.data.data.titulo);
        setDescription(res.data.data.descripcion);
        var imgURL="";
        try{
          imgURL=process.env.SERVER_URL+"/"+res.data.data.imgs[0].path.replace("\\","/");
        }catch(er){
          imgURL="/img/landing/carrusel0.jpg";
        }
        setImageURL(imgURL);
      }
    }, []);

    const handleNoDialog = () =>{
      setOpenDialog(false);
    }

    const handleYesDialog = async() =>{
      if(deleteFav)
        await deleteFromTrash(idFav);
      else
        await trashFavourite(idFav);
      router.replace(router.asPath);

      setOpenDialog(false);
    }

    return(
        <> 
          <Card className={classes.root}>
              <Hidden only="xs">
                  <CardMedia
                      className={classes.cover}
                      image={imageURL}
                      title={title}
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
                          <Button startIcon={<DeleteIcon/>} variant="outlined" color="primary" onClick={()=>{setOpenDialog(true)}} >Eliminar Completamente</Button>
                          :
                          <Button startIcon={<FavoriteBorderIcon/>} variant="outlined" color="primary" onClick={()=>{setOpenDialog(true)}}  >Eliminar de Favoritos</Button>
                          }   
                          <Box display="flex" flexGrow={1} justifyContent="flex-end">
                            <Link href={`/inmuebles/${idFav}`}>
                              <Button color="primary" variant="text">Ver más...</Button>
                            </Link>
                          </Box>
                      </Box>
              </div>
              </Card>
              <YesNoDialog
                title={!deleteFav?"Eliminar de favoritos...":"Eliminar Completamente..."}
                description={!deleteFav?`¿Seguro que quieres enviar a papelera al inmueble "${title}"?`:`¿Seguro que quieres eliminar completamente al inmueble "${title}" de la papelera?`}
                openDialog={openDialog}
                handleYes={handleYesDialog}
                handleNo={handleNoDialog}
                yesText="Sí, seguro!"
              />
            </>
    );
}