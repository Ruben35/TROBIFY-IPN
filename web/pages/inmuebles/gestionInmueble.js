import Head from 'next/head'
import { Box, Button, Container, Grid, Link, ThemeProvider, Typography } from '@material-ui/core';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';
import { useRouter } from 'next/router';
import useMediaQuery from '../../utils/CustomHooks'
import YesNoDialog from '../../components/basic/YesNoDialog';
import cookies from 'next-cookies';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    button: {
        flexGrow: 1,
    },
    colorRed: {
        color: '#f44336',
    }
}));

export default function gestion( { dataInmuebles } ) {
    const classes = useStyles();
    let isTabletOrSmaller= useMediaQuery("(max-width: 426px)");

    const CardGestion = ({ title, description, idInmueble , imgURL}) => {

        const img= (imgURL!="" && imgURL!=undefined)?process.env.SERVER_URL+"\\"+imgURL:"/img/landing/carrusel0.jpg";
        const router = useRouter();

        const [openDialog, setOpenDialog] = useState(false);

        const handleYesDialog = async () => {


            setOpenDialog(false);
        }

        return (
            <>
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
                            {title?title:"Titulo del Inmueble"} </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {description?
                        (description.length>200)?description.substring(0,197)+"..."
                            :description
                        :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet consectetur lectus. Vestibulum nulla ipsum, vestibulum sit amet lacus sollicitudin, laoreet suscipit lorem. Nullam ac libero eros."}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link href={`/inmuebles/${idInmueble}`}>
                        <Button size="large" color="primary" variant="outlined">
                            Ver
                        </Button>
                    </Link>
                    <Button size="large" color="secondary" variant="outlined">
                        Editar
                    </Button>
                    <div className={classes.button}>
                        <IconButton className={classes.colorRed} onClick={()=> setOpenDialog(true)}>
                            <DeleteOutlinedIcon />
                        </IconButton>
                    </div>
                </CardActions>
            </Card>
            <YesNoDialog
                title={"Eliminar Inmueble..."}
                description={`¿Seguro que quieres eliminar el inmueble "${title}"?, una vez realizado esto, los clientes no podran encontrar tu inmueble ni agendar visitas.`}
                openDialog={openDialog}
                handleYes={handleYesDialog}
                handleNo={() => setOpenDialog(false)}
                yesText="Sí, seguro!"
            />
            </>
        );
    }
    return (
        <>
            <Head>
                <title>Gestión de Inmuebles TROBIFY</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="lg">
                <Box display="flex" flexDirection={isTabletOrSmaller?"column":"row"}  alignItems="center" mt={2} mb={2}>
                    <Box flexGrow={1} textAlign={isTabletOrSmaller?"center":""}>
                        <Typography variant="h4" color="secondary">Tus inmuebles</Typography>
                    </Box>
                    <Link href="/inmuebles/registrar">
                        <Button variant="contained" size="medium" color="secondary">Registrar Nuevo Inmueble</Button>
                    </Link>
                    <Box marginLeft={!isTabletOrSmaller?3:0} marginTop={isTabletOrSmaller?3:0}>
                        <Link href="/inmuebles/registroServicio">
                            <Button variant="contained" size="medium" color="primary">Registrar Nuevo Servicio</Button>
                        </Link>
                    </Box>
                </Box>
                <Box mt={2}>
                    <Box display="flex" alignItems="center" justifyContent="flex-end" mb={2}>
                    </Box>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={5}>
                     {/* ITEMS */}
                     {
                      (dataInmuebles===undefined || dataInmuebles.length===0)?
                      <Box display="flex" alignItems="center" justifyContent="center" height="60vh">
                        <Typography variant="h3" color="textSecondary">No tienes inmuebles</Typography>
                      </Box>
                      :
                      dataInmuebles.map((inmueble)=>{
                        return (
                        <Grid item key={inmueble.idinmueble}>
                            <CardGestion
                                title={inmueble.titulo}
                                description={inmueble.descripcion}
                                imgURL={inmueble.imgs[0]?inmueble.imgs[0].path:""}
                                idInmueble={inmueble.idinmueble}
                            />
                        </Grid>
                        );
                      })
                    }  
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    const jwt=cookies(context).jwt
    const email=cookies(context).email;
    const type=cookies(context).type;
    if(jwt){ //logged?
        var reqURL=process.env.SERVER_URL;
        if(type==="cliente")
            reqURL+=`/inmueble/inmueblesCliente/${email}`;
        else
            reqURL+=`/inmueble/inmueblesAgencia/${email}`;
        try{
            const res = await axios({
                method: "get",
                url: reqURL,
              });
            
            const dataInmuebles = res.data;

            return { props: { dataInmuebles }}  
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