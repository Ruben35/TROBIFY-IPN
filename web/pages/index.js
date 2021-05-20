import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Typography, ButtonGroup } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import styles from '../styles/landing.module.css'
import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Box from '@material-ui/core/Box'
import Link from 'next/link'

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
          ¿Qué es Trobify-IPN?
        </Typography>
        <Paper elevation={3} className={styles.whatIsSection_Paper}>
          <Typography variant="body1" color="initial" >
            Trobify-IPN es el lugar perfecto para que puedas realizar la compra/venta/alquiler de cualquier inmueble. 
          </Typography>
        <Image src="/img/landing/for_sale_house.svg" width={2} height={1} layout='responsive' className={styles.whatIsSection_Image}/>
        </Paper>
      </Container>
      <Container maxWidth="md" className={styles.whatIsSection}>
        <Typography variant="h4" color="initial" className={styles.whatIsSection_question}>
          ¿Cómo funciona?
        </Typography>
        <Paper elevation={3} className={styles.whatIsSection_Paper}>
          <Typography variant="body1" color="initial" >
            Si quieres comprar/alquilar/vender un inmueble lo único que tienes que hacer es registrarte en Trobify-IPN y podrás comenzar
            a acceder a inmuebles de distintos lugares ofertados por personas o agencias inmobiliarias.
          </Typography>
        <Image src="/img/landing/map.svg" width={2} height={1} layout='responsive' className={styles.whatIsSection_Image}/>
        </Paper>
      </Container>
      <Typography variant="h3" color="secondary" className={styles.whatIsSection_questionCenter}>
          ¿Qué esperas para registrarte?
      </Typography>
      <Container maxWidth="xs" className={styles.imageContainer}><Image src="/img/landing/building.svg" width={1} height={1} layout='responsive' />
      </Container>
        <Box display="flex" justifyContent="center" flexWrap="wrap" mb={8}>
          <Link href="/registro/cliente">
            <Button variant="contained" color="primary" className={styles.finalbutton}>Registrar Usuario</Button>
          </Link>
          <Link href="/registro/agencia">
            <Button variant="outlined" color="primary" className={styles.finalbutton}>Registrar Agencia Inmobiliaria</Button>
          </Link>
        </Box>
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
    }, 10000);
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
          <Typography variant="h3" color='secondary'>
            Trobify-IPN
          </Typography>
          <Typography variant="h4">
            El lugar perfecto para buscar el inmueble perfecto.
          </Typography>
        </Container>
          <Link href='/inmuebles'>
            <Button variant="contained" className={styles.hero_callToAction} color="primary">
              <Typography variant="h6">¡Empieza a buscar ya!</Typography>
            </Button>
          </Link>
      </div>
  );
}

