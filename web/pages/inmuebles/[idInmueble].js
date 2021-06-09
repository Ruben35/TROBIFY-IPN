import Head from 'next/head'
import { Box, Container, Grid, Paper, Typography, GridList, GridListTile, GridListTileBar, Divider, Button } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageZoom from 'react-medium-image-zoom'
import useMediaQuery from '../../utils/CustomHooks';
import theme from '../../modules/theme';
import ScrollDialog from '../../components/basic/ScrollDialog';

//*STYLES
const useStyles = makeStyles((theme) => ({
    imgPort: {
        width: "100%",
        maxHeight: "350px",
        borderRadius: "10px",
        boxShadow: "4px 7px 13px rgba(0, 0, 0, 0.24)",
        marginBottom: theme.spacing(2),
        objectFit: "cover"
    },
    zoomImage:{
        borderRadius: "10px",
        boxShadow: "4px 7px 13px rgba(0, 0, 0, 0.24)",
        objectFit: "cover"
    },
    rootGridList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    gridListImg: {
        cursor: 'pointer',
        objectFit: "cover",
        filter: 'brightness(50%)',
        transition: 'filter 0.5s',
        "&:hover": {
            filter: 'brightness(100%)',
        }
    }
}));

//* EXAMPLES
const lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu";

const tileData =[
    {
        title:"img1",
        img:"/img/landing/carrusel0.jpg"
    },
    {
        title:"img2",
        img:"/img/landing/carrusel1.jpg"
    },
    {
        title:"img3",
        img:"/img/landing/carrusel2.jpg"
    },
]

const servicesData =[
    {
        tipoServicio:"Ferreteria",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
    },
    {
        tipoServicio:"Floreria",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
    },
    {
        tipoServicio:"Ferreteria",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
    },
    {
        tipoServicio:"Carniceria",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
    },
    {
        tipoServicio:"Plomeria",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
    },
    {
        tipoServicio:"Ferreteria",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
    },
    {
        tipoServicio:"Plomeria",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
    },
    {
        tipoServicio:"Mecanico",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m"
    },
]

//* PAGE
export default function verInmueble(){
    const router = useRouter();
    const { idInmueble } = router.query;
    const classes = useStyles();

    const isSmall = useMediaQuery("(max-width: 769px)");

    //States
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [surface, setSurface] = useState("");
    const [nGarage, setNGarage] = useState("");
    const [nRooms, setNRooms] = useState("");
    const [nBathrooms, setNBathrooms] = useState("");
    const [characteristics, setCharacteristics] = useState("");
    const [propietaryName, setPropietaryName] = useState("");
    const [calle, setCalle] = useState("");
    const [numExt, setNumExt] = useState("");
    const [numInt, setNumInt] = useState("");
    const [colonia, setColonia] = useState("");
    const [cp, setCP] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [estado, setEstado] = useState("");
    const [tipoTransaccion, setTipoTransaccion] = useState("");
    const [precio, setPrecio] = useState("4324825784");

    const direccion = `${calle} No. ${numExt} ${numInt?"No. Int"+numInt:""}, ${colonia}, ${cp} ${ciudad}, ${estado}`;

    const services=servicesData?formatServices():[];

    //AuxStates
    const [actualTile, setActualTile] = useState(tileData[0]);
    const [openServices, setOpenServices] = useState(false);

    //Functions
    function formatServices(){
        let array=servicesData.sort((a,b)=>{return a.tipoServicio>b.tipoServicio?1:-1});

        let newServices = [];
        let obj = new Object();
        obj.serviceType=array[0].tipoServicio;
        obj.services=[];
        for(let elem of array){
            if(elem.tipoServicio!=obj.serviceType){
                newServices.push(obj);
                obj=new Object();
                obj.serviceType=elem.tipoServicio;
                obj.services=[];
            }                
            obj.services.push(elem.description);   
        }

        return newServices;
    }

    return (
        <>
            <Head>
                <title>Trobify: Inmueble "{title}"</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" textAlign="center" marginTop={1} marginBottom={1}>
                    <Typography variant="h3">{title?title:"Título del Inmueble"}</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={3} paddingBottom={6}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <Box width="100%" height="auto">
                                    <ImageZoom 
                                      image={{
                                          src: actualTile.img,
                                          alt: actualTile.title,
                                          className: classes.imgPort
                                      }}
                                      zoomImage={{
                                          src: actualTile.img,
                                          alt: actualTile.title,
                                          className: classes.zoomImage
                                      }}
                                      zoomMargin={isSmall?40:100}
                                      />
                                    {/* Carrusel */}
                                    <div className={classes.rootGridList}>
                                        <GridList className={classes.gridList} cols={2.5}>
                                            {tileData.map((tile, index) => (
                                            <GridListTile key={tile.title} className={classes.gridListImg} onClick={()=>setActualTile(tileData[index])}>
                                                <img src={tile.img} alt={tile.title} />
                                            </GridListTile>
                                            ))}
                                        </GridList>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box paddingLeft={2} paddingRight={2}>
                                    <Box display="flex" justifyContent="flex-end" flexDirection={isSmall?"column":"row"} alignItems="center"  >
                                        <Box flexGrow={1}>
                                            <Box bgcolor="#ffc107"
                                                 color="#fff" 
                                                 display="inline-block" 
                                                 padding="5px 10px 5px 10px" 
                                                 borderRadius="30px">
                                                    <b>Venta</b>
                                            </Box>
                                        </Box>
                                        <Box textAlign="center">
                                            <Typography variant="h4" color="secondary">
                                                <b>Precio:</b> ${precio?precio.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","):"4,000,000,123"} MXN
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box marginTop={1}>
                                        <Typography variant={'h5'}><b>Descripción</b></Typography>
                                        <Divider/>
                                        <Typography variant="body1">
                                            <Box marginTop={1}>
                                            {description?description:lorem}
                                            </Box>
                                        </Typography>
                                    </Box>
                                    <Box marginTop={2}>
                                        <Typography variant={'h5'}><b>Características</b></Typography>
                                        <Divider/>
                                        <Typography variant="body1">
                                            <Box paddingTop={2} paddingBottom={2} paddingLeft={1} paddingRight={1} textAlign="center">
                                                <Grid container spacing={1}>
                                                    <Grid item xs>
                                                        <b>Superficie: </b> <br/>{surface?surface:"400"} m²
                                                    </Grid>
                                                    <Grid item xs>
                                                        <b>Garages: </b> <br/>{nGarage?nGarage:"2"} 
                                                    </Grid>
                                                    <Grid item xs>
                                                        <b>Cuartos: </b> <br/>{nRooms?nRooms:"8"}
                                                    </Grid>
                                                    <Grid item xs>
                                                        <b>Baños: </b> <br/>{nBathrooms?nBathrooms:"2"}
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            {characteristics?characteristics:lorem}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md xs={12}>
                                <Box padding={2}>
                                    <Typography variant={'h5'}><b>Dirección</b></Typography>
                                    <Divider/> 
                                    <Typography variant="body1">
                                        <Box marginTop={1}>
                                        {calle?direccion:"Av. 678 No. 22 No. Int 542, San Juanico, 02355 Ciudad de México, CDMX"}
                                        </Box>
                                    </Typography>
                                </Box>
                                <Box padding={2}>
                                    <Typography variant={'h5'}><b>Servicios</b></Typography>
                                    <Divider/> 
                                    <Typography variant="body1">
                                    {
                                        services.slice(0,3).map((service,index)=>{
                                            return(
                                                <>
                                                    <ul key={index}>
                                                        <li>
                                                            <b>{service.serviceType}</b>
                                                            <ul>
                                                                <Typography variant="body2">
                                                                <li>
                                                                    {service.services[0]}
                                                                </li>
                                                                {service.services.length>1?
                                                                <li>
                                                                    {service.services.length-1} servicios más...
                                                                </li>
                                                                :
                                                                ""
                                                                }
                                                                </Typography>
                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </>
                                            )
                                        })
                                    }
                                    {services.length>3?
                                    <ul>
                                        <li><b>{services.length-3} tipo{services.length-3===1?"":"s"} de servicio{services.length-3===1?"":"s"} más...</b></li>
                                    </ul>
                                    :
                                    ""
                                    }
                                    </Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button variant="contained" color="primary" onClick={() => setOpenServices(true)} >Ver todos...</Button>
                                    </Box>
                                </Box>
                            </Grid>                       
                            <Grid item xs>
                                <Box padding={2}>
                                <Typography variant={'h5'}><b>Propietario</b></Typography>
                                <Divider/> 
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            <ScrollDialog
                open={openServices}
                handleClose={() => setOpenServices(false)}
                title="Servicios de la Zona"
                content=
                        {
                            services.map((service, index)=>{
                                return(
                                    <Typography variant="body1" key={index}>
                                        <ul>
                                            <li>
                                                <b>{service.serviceType}</b>
                                                <ul>
                                                    <Typography variant="body2">
                                                        {service.services.map((elem, index)=>{
                                                            return(
                                                                <li key={index}>
                                                                    {elem}
                                                                </li>
                                                            );
                                                        })}
                                                    </Typography>
                                                </ul>
                                            </li>

                                        </ul>
                                    </Typography>
                                )
                            })
                        }   
            />
        </>
    );
}