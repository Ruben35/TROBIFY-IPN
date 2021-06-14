import {Box, Typography, Container, Button, Divider, Paper, Grid, Link} from '@material-ui/core'
import Head from 'next/head'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles';
import SmallCard from '../../components/basic/SmallCard'
import cookies from 'next-cookies';
import axios from 'axios';

export default function PapeleraFavoritos( { idPapeFavs }){

    return(
        <>  
            <Head>
                <title>Trobify: Papelera Favoritos</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={1}>
                    <Typography variant="h3" color="secondary">Papelera Favoritos</Typography>
            </Box>
            <Container maxWidth="lg">
                <Box padding={1}/>
                <Paper elevation={2}>
                    <Box padding={3}>
                        <Box display="flex" justifyContent="flex-start" marginLeft={1}>
                            <Typography variant="h4">Todas</Typography>
                        </Box>
                        <Divider />
                        <Box margin={3}>
                            <Grid container spacing={2} justify="center">
                                { 
                                    
                                    (idPapeFavs.length===0 || idPapeFavs===undefined)?
                                    <Box display="flex" alignItems="center" justifyContent="center" height="40vh">
                                        <Typography variant="h3" color="textSecondary">No hay datos</Typography>
                                    </Box>
                                    :
                                    idPapeFavs.map((id)=>{
                                        return (
                                            <Grid item key={id}>
                                                <SmallCard 
                                                idFav={id}
                                                deleteFav
                                                />
                                            </Grid>
                                        );
                                    })
                                }
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
    const type=cookies(context).type;
    if(jwt && type==="cliente"){ //logged and client?
        try{
            const res = await axios.get( process.env.SERVER_URL+"/inmueble/verPapalera/"+email);
            if(res.data.ok){
                var idPapeFavs = [];
                for(var i=0;i<res.data.papelera.length;i++){
                    idPapeFavs.push(res.data.papelera[i].idinmueble);
                }
                console.log(idPapeFavs)
                return { props: { idPapeFavs }}  
            }else{
                throw new Error("No hay servicio");
            }
            
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