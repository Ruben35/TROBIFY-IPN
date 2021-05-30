import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  button: {
      flexGrow: 1,
  }
});

export default function ItemCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
            Titulo de Inmueble
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet consectetur lectus. Vestibulum nulla ipsum, vestibulum sit amet lacus sollicitudin, laoreet suscipit lorem. Nullam ac libero eros.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         <div className={classes.button}>
            <IconButton color="secondary" label="Favoritos" >
                <FavoriteBorderIcon/>
            </IconButton>
        </div>
        <Button size="large" color="secondary" variant="outlined">
          Ver Más...
        </Button>
      </CardActions>
    </Card>
  );
}