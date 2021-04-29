import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import styles from '../styles/landing.module.css'
import React, {useState, useEffect} from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Trobify: Home
        </title>
        <link rel="preload" href="/img/landing/carrusel0.jpg" as="image"/>
        <link rel="preload" href="/img/landing/carrusel1.jpg" as="image"/>
        <link rel="preload" href="/img/landing/carrusel2.jpg" as="image"/>
        <link rel="preload" href="/img/landing/carrusel3.jpg" as="image"/>
      </Head>
      <Hero></Hero>
      <Container maxWidth="md" className={styles.whatIsSection}>
        <Typography variant="h4" color="initial" className={styles.whatIsSection_question}>
          ¿Qué es Trobify?
        </Typography>
        <Paper elevation={3}>
          <Typography variant="body1" color="initial" className={styles.whatIsSection_Paper}>
            Trobify es el lugar perfecto para que puedas realizar la compra/venta/alquiler de cualquier inmueble. 
          </Typography>
        </Paper>
      </Container>
    </>
  )
}

const Hero = () =>{
  const [index, setIndex]= useState(0);
  const [actualImg, setActualImg] = useState("/img/landing/carrusel0.jpg");

  useEffect(() => {
    const interval = setInterval(() => {
      if(index===3){
        setIndex(0);
        setActualImg(`/img/landing/carrusel${0}.jpg`);
      }else{
        setIndex(index => index+1);
        setActualImg(`/img/landing/carrusel${index+1}.jpg`);
      }
      console.log(index);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
      <div className={styles.hero_image} 
          style={{
            backgroundImage: `url(${actualImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            }}>
        <Container maxWidth="xs" className={styles.hero_container}>
          <Typography variant="h3" color='primary'>
            Trobify-IPN
          </Typography>
          <Typography variant="h4">
            El lugar perfecto para buscar el perfecto inmueble.
          </Typography>
        </Container>
          <Button variant="contained" className={styles.hero_callToAction} color="primary">
            <Typography variant="h6">¡Empieza a buscar ya!</Typography>
          </Button>
      </div>
  );
}