import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import Image from '../assets/img/landing/carrusel1.jpg'
import styles from '../styles/landing.module.css'
import {grey}from '@material-ui/core/colors';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Trobify: Home
        </title>
      </Head>
      <Hero></Hero>
    </>
  )
}


const Hero = () =>{

  return (
      <div className={styles.hero_image} 
          style={{
            background: 'url('+Image+') no-repeat center',
            backgroundSize: 'cover'}}>
        <Container maxWidth="xs" className={styles.hero_container}>
          <Typography variant="h3" color='primary'>
            Trobify-IPN
          </Typography>
          <Typography variant="h4">
            El lugar perfecto para buscar el perfecto inmueble.
          </Typography>
        </Container>
      </div>
  );
}