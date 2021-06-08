import {Box, Typography, Container, Button, Divider, Paper, Grid, Link} from '@material-ui/core'
import Head from 'next/head'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles';
import SmallCard from '../../components/basic/SmallCard'
import cookies from 'next-cookies';
import axios from 'axios';

export default function GestionFavoritos({ idFavs }){
    
    console.log(idFavs);
    return(
        <>  
            <Head>
                <title>Trobify: Tus Favoritos</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={1}>
                    <Typography variant="h3" color="secondary">Favoritos</Typography>
            </Box>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="flex-end">
                    <Link href="/cliente/papeleraFavoritos">
                    <Button variant="outlined" startIcon={<DeleteIcon />} color="secondary" size="large" >Ver Papelera</Button>
                    </Link>
                </Box>
                <Box padding={1}/>
                <Paper elevation={2}>
                    <Box padding={3}>
                        <Box display="flex" justifyContent="flex-start" marginLeft={1}>
                            <Typography variant="h4">Todas</Typography>
                        </Box>
                        <Divider />
                        <Box margin={3}>
                            <Grid container spacing={2} justify="center">
                                { idFavs.map((id)=>{
                                    return (
                                        <Grid item key={id}>
                                            <SmallCard idFav={id}/>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const jwt=cookies(context).jwt
    const email=cookies(context).email;
    if(jwt){ //logged?
        try{
            const res = await axios({
                method: "get",
                url: process.env.SERVER_URL+"/inmueble/favoritos/"+email,
                headers: { "token": jwt }
              });
            var idFavs = [];
            for(var i=0;i<res.data.res.length;i++){
                idFavs.push(res.data.res[i].inmueble_idinmueble);
            }
            console.log(idFavs);
            return { props: { idFavs }}  
        }catch(error){
            console.error(error);
        }
    }else{
        const { res } = context;
        res.setHeader("location", "/");
        res.statusCode = 302;
        res.end();
    }

    return {
      props: {},
    }
  }