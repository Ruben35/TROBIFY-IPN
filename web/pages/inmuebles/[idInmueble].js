import Head from 'next/head'
import { Box, Container, Grid, Paper, Typography, GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageZoom from 'react-medium-image-zoom'
import useMediaQuery from '../../utils/CustomHooks';

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
    const [tipoTransaccion, setTipoTransaccion] = useState(1);
    const [precio, setPrecio] = useState("");


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

    //AuxStates
    const [actualTile, setActualTile] = useState(tileData[0]);

    return (
        <>
            <Head>
                <title>Trobify: Ver Inmueble "{title}"</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" textAlign="center" marginTop={1} marginBottom={1}>
                    <Typography variant="h3">Titulo del Inmueble</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={3}>
                        <Grid container spacing={2}>
                            <Grid item sm={6} xs={12}>
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
                            <Grid item>
                                <Box width="100%" height="auto">
                                    lo demas
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </>
    );
}