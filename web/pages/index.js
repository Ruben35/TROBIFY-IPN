import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'


export default function Home() {
  return (
    <>
      <Head>
        <title>
          Trobify: Home
        </title>
      </Head>
      <Container maxWidth="lg">
        <Typography variant="h4">Index</Typography>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="default">
          Default
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="inherit">
          Inherit
        </Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="default">
          Default
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="inherit">
          Inherit
        </Button>
      </Container>
    </>
  )
}
