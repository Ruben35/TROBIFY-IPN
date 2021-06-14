import React, { useEffect , useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import useUser from '../../utils/UserHook';
import useFavourite from '../../utils/favouriteHooks';
import { Link } from '@material-ui/core';
import { useRouter } from 'next/router';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  button: {
      flexGrow: 1,
  },
  noDecoration :{
    textDecoration: 'none'
  }
});

export default function ItemCard({title, description, imgURL, idInmueble, openSnackbar}) {
  const classes = useStyles();
  const { addFavourite, trashFavourite, isMyFavourite } = useFavourite();
  const { isLogged, userType } = useUser();
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();



  useEffect(async ()=>{
    //check if is favorite
    if(isLogged && userType==="cliente"){
      const fav = await isMyFavourite(idInmueble);
      setIsFavorite(fav);
    }
  },[])

  const img= (imgURL!="" && imgURL!=undefined)?process.env.SERVER_URL+"\\"+imgURL:"/img/landing/carrusel0.jpg";

  const handleFavorite= ()=>{
    if(!isLogged)
      openSnackbar("session");
    else if(userType!="cliente")
      openSnackbar("type")
    else{
      if(isFavorite){
        if(trashFavourite(idInmueble))
          setIsFavorite(!isFavorite);
      }else{
        if(addFavourite(idInmueble))
          setIsFavorite(!isFavorite);
      }
    }
  }

  return (
    <Card className={classes.root}>
        <CardActionArea onClick={()=> router.push(`/inmuebles/${idInmueble}`)}>
          <CardMedia
            component="img"
            alt="Titulo de Inmueble"
            height="140"
            image={img}
            title="Titulo de Inmueble"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title?title:"Titulo de Inmueble"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description?
                (description.length>200)?description.substring(0,197)+"..."
                  :description
                :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet consectetur lectus. Vestibulum nulla ipsum, vestibulum sit amet lacus sollicitudin, laoreet suscipit lorem. Nullam ac libero eros."}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
         <div className={classes.button}>
            <IconButton color="secondary" label="Favoritos" onClick={handleFavorite} >
                {isFavorite?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
        </div>
        <Link href={`/inmuebles/${idInmueble}`}>
          <Button size="large" color="secondary" variant="outlined">
            Ver Más...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}