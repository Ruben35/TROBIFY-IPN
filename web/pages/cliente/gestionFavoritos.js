import {Box, Typography, Container, Button, Divider, Paper, Grid} from '@material-ui/core'
import Head from 'next/head'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles';
import SmallCard from '../../components/basic/SmallCard'

export default function GestionFavoritos(){

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
                    <Button variant="outlined" startIcon={<DeleteIcon />} color="secondary" size="large" >Ver Papelera</Button>
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
                                <Grid item>
                                    <SmallCard/>
                                </Grid>
                                <Grid item>
                                    <SmallCard/>
                                </Grid>
                                <Grid item>
                                    <SmallCard/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}