import Head from 'next/head'
import {Box, Container, Typography, Divider, TextField, Paper ,
        Grid, RadioGroup, FormControlLabel, Radio, FormLabel, FormHelperText,
        FormControl, InputLabel, Select, MenuItem, Button, GridList, GridListTile,
        GridListTileBar, Snackbar} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';
import { useRef, useState } from 'react';
import useMediaQuery from '../../utils/CustomHooks'
import OkDialog from '../../components/basic/OkDialog'
import { useRouter } from 'next/router'
import useUser from '../../utils/UserHook'
import axios from 'axios'

export default function RegistrarInmueble(){

    return(
        <>
            <Head>
                <title>Trobify: Registrar Nuevo Inmueble</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3}>
                    <Typography variant="h3" color="secondary">Registra Inmueble</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={5}>
                        <FormNuevoInmueble/>
                    </Box>
                </Paper>
            </Container>
            <Box minHeight="64px"></Box>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    center: {
      display: "flex",
      justifyContent: "center",
      marginTop:theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    txtlarge:{
        flexGrow: 1,
    },
    txtsmall:{
        width: theme.spacing(18)
    },
    divPropietario:{
        display:"grid",
        gridTemplateColumns: "auto auto"
    },
    selectBigger:{
        width: theme.spacing(30)
    },
    root: {
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
    title: {
    color: theme.palette.primary.light,
    },
    titleBar: {
    background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

const FormNuevoInmueble = ()=>{
    const classes = useStyles();
    const { userType, userEmail, userName } = useUser();

    //Form states
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
    const imgs = useRef();
    //Aux states
    const [isWrong, setIsWrong] = useState(false);
    const [isPropietary, setIsPropietary] = useState("Si");
    const [tileData, setTileData] = useState([]); //ImgsPreview
    const [open, setOpen] = useState(false);
    const [successDialog, setSuccessDialog] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    //Router
    const router = useRouter();

    let isTabletOrBigger= useMediaQuery("(min-width: 426px)");


    const registerInmueble = () => {
        var bodyFormData = new FormData();
        bodyFormData.append('correo',userEmail);
        bodyFormData.append('titulo',title);
        bodyFormData.append('descripcion',description);
        bodyFormData.append('caracteristicas',characteristics);
        bodyFormData.append('precio',precio);
        bodyFormData.append('status',0);
        bodyFormData.append('superficie',surface);
        bodyFormData.append('noGarage',nGarage);
        bodyFormData.append('noRecamaras',nRooms);
        bodyFormData.append('noBanios',nBathrooms);
        var propietary=""
        if(isPropietary==="Si")
            propietary=userName;
        else
            propietary=propietaryName;
        bodyFormData.append('propietario',propietary);
        if(tipoTransaccion===1)
            bodyFormData.append('transaccion',"Venta");
        else
            bodyFormData.append('transaccion',"Alquiler");
        bodyFormData.append('cp',cp);
        bodyFormData.append('calle',calle);
        bodyFormData.append('noExterior',numExt);
        bodyFormData.append('noInterior',numInt);
        bodyFormData.append('colonia',colonia);
        bodyFormData.append('ciudad',ciudad);
        bodyFormData.append('estado',estado);
        bodyFormData.append('images', imgs.current.files);        
    
        var urlReq="";
        if(userType==='cliente')
            urlReq=process.env.SERVER_URL+"/inmueble/registroCliente";
        else
            urlReq=process.env.SERVER_URL+"/inmueble/registroAgencia";

        axios({
            method: "post",
            url: urlReq,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data"}
        })
        .then((res) =>{
            console.log(res);
            if(res.data.mensaje==="Cliente no encontrado en la BD"){
                console.log("Email: "+userEmail+"UserName"+userName+"userType"+userType);
                setAlertMessage("No se completo la petición");
            }else{
                setSuccessDialog(true);
            }
        })
        .catch((ex) =>{
            console.log(ex.response);
            if(ex.response){
                setAlertMessage("No se completo la petición");
            }else{
                setAlertMessage("Error de servidor: Intente nuevamente más tarde");
            }
            setOpen(true);
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const someoneIsMissing= (title==="" || description==="" || surface==="" || nGarage==="" || nRooms ==="" || nBathrooms==="" ||
         (isPropietary==="No" && propietaryName==="") || calle==="" || numExt==="" || colonia==="" || cp==="" || ciudad==="" || estado==="" ||
         precio==="");

        if(someoneIsMissing || imgs.current.files.length===0){
            setIsWrong(true);
            if(imgs.current.files.length===0)
                setAlertMessage("Agrega mínimo una foto");
            else
                setAlertMessage("Datos incompletos");
            setOpen(true);
        }else{
            setIsWrong(false);
            registerInmueble();
        }
    }

    const handleNumber = (value,callback) =>{
        if(value>=0)
            callback(value);
    } 

    const handleCP = (e) =>{
        if(e.target.value.length<=5){
            setCP(e.target.value);
        }
    }

    const changeImages = (e) =>{
        let tiles = [];
        let files = imgs.current.files;
        for(var i=0;i<files.length;i++){
            let tile={
                img: URL.createObjectURL(files[i]),
                title: files[i].name,
                author: ""
            }
            tiles.push(tile);
        }
        setTileData(tiles);
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleOnOk = () =>{
        setSuccessDialog(false);
        router.push("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5">Datos de la Publicación</Typography>
            <Divider/>
            <div className={classes.center}>
                <TextField 
                className={classes.txtlarge}
                variant="outlined"
                label="Titulo de Publicación del Inmueble"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                error={(isWrong && title==="")}
                helperText={(isWrong && title==="")?"Escriba un titulo":""}
                />
            </div>
            <div className={classes.center}>
                <TextField 
                className={classes.txtlarge}
                variant="outlined"
                label="Descripción del inmueble"
                multiline
                rows={6}
                rowsMax={10}
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                error={(description.length>500 || (isWrong && description===""))}
                helperText={(description.length>500)?`${(description.length-500)} caracteres sobre 500`:
                            (isWrong && description==="")?"Escriba una descripción":""}
                />
            </div>
            <Typography variant="h5">Características del Inmueble</Typography>
            <Divider/>
            <Box padding={1}/>
            <Grid container spacing={5} justify="center" >
                    <Grid item> <TextField type="number" min={0} className={classes.txtsmall} variant="outlined" label="Superficie m²" value={surface} onChange={(e)=>{handleNumber(e.target.value, setSurface)}}   error={isWrong && surface===""} helperText={(isWrong && surface==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Garages" value={nGarage} onChange={(e)=>{handleNumber(e.target.value, setNGarage)}}   error={isWrong && nGarage===""} helperText={(isWrong && nGarage==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Cuartos" value={nRooms} onChange={(e)=>{handleNumber(e.target.value, setNRooms)}}   error={isWrong && nRooms===""} helperText={(isWrong && nRooms==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Baños" value={nBathrooms} onChange={(e)=>{handleNumber(e.target.value, setNBathrooms)}}   error={isWrong && nBathrooms===""} helperText={(isWrong && nBathrooms==="")?"Requerido":""} /></Grid>
            </Grid>
            <div className={classes.center}>
                <TextField 
                className={classes.txtlarge}
                variant="outlined"
                label="Más características"
                multiline
                rows={6}
                rowsMax={10}
                value={characteristics}
                onChange={(e)=>{setCharacteristics(e.target.value)}}
                error={(characteristics.length>500)}
                helperText={(characteristics.length>500)?`${(characteristics.length-500)} caracteres sobre 500`:""}
                />
            </div>
            <div className={(isTabletOrBigger && isPropietary==="No")?classes.divPropietario:""}> 
                {/* FALTA AGREGAR ESTILOS PARA PONER DE LADO EL PROPIETARIO (GRID) */}
                <Box display="flex"
                    flexDirection="column"
                    justifyContent= "center"
                    alignItems= "center">       
                    <FormLabel component="legend">¿Es usted el propietario?</FormLabel>
                    <RadioGroup row value={isPropietary} onChange={(e)=>{setIsPropietary(e.target.value); setPropietaryName("")}}>
                        <FormControlLabel value="Si" control={<Radio />} label="Sí" labelPlacement="bottom"/>
                        <FormControlLabel value="No" control={<Radio />} label="No" labelPlacement="bottom"/>
                    </RadioGroup>
                    <FormHelperText error></FormHelperText>
                </Box>
                {
                    isPropietary==="No"?
                    <div className={classes.center}>
                        <TextField 
                        className={classes.txtlarge}
                        variant="outlined"
                        label="Nombre del Propietario"
                        value={propietaryName}
                        onChange={(e)=>{setPropietaryName(e.target.value)}}
                        error={(isWrong && propietaryName==="")}
                        helperText={(isWrong && propietaryName==="")?"Escriba el nombre del propietario":""}
                        />
                    </div>
                    :""
                }
            </div>
            <Box padding={1}/>
            <Typography variant="h5">Dirección del Inmueble</Typography>
            <Divider/>
            <Box padding={1}/>
            <Grid container spacing={5} justify="center" >
                    <Grid item> <TextField value={calle} onChange={(e)=>{setCalle(e.target.value)}} variant="outlined" label="Calle" error={(isWrong && calle==="")} helperText={(isWrong && calle==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField value={numExt} onChange={(e)=>{setNumExt(e.target.value)}} variant="outlined" label="No. Exterior" error={(isWrong && numExt==="")} helperText={(isWrong && numExt==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField value={numInt} onChange={(e)=>{setNumInt(e.target.value)}} variant="outlined" label="No. Interior"/></Grid>
                    <Grid item> <TextField value={colonia} onChange={(e)=>{setColonia(e.target.value)}} variant="outlined" label="Colonia" error={(isWrong && colonia==="")} helperText={(isWrong && colonia==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField value={cp} onChange={handleCP} variant="outlined" label="Código Postal" error={(isWrong && cp==="")} helperText={(isWrong && cp==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField value={ciudad} onChange={(e)=>{setCiudad(e.target.value)}} variant="outlined" label="Ciudad" error={(isWrong && ciudad==="")} helperText={(isWrong && ciudad==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField value={estado} onChange={(e)=>{setEstado(e.target.value)}} variant="outlined" label="Estado" error={(isWrong && estado==="")} helperText={(isWrong && estado==="")?"Requerido":""} /></Grid>
            </Grid>
            <Box padding={1}/>
            <Typography variant="h5">Datos de Transacción</Typography>
            <Divider/>
            <Box padding={1}/>
            <Grid container spacing={5} justify="center" >
                <Grid item>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Tipo de Transacción</InputLabel>
                        <Select
                        value={tipoTransaccion}
                        onChange={(e)=>{setTipoTransaccion(e.target.value)}}
                        className={classes.selectBigger}
                        >
                        <MenuItem value={1}>Venta de Inmueble</MenuItem>
                        <MenuItem value={2}>Alquiler de Inmueble</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item> <TextField value={precio} type="number" className={classes.selectBigger} onChange={(e)=>{handleNumber(e.target.value,setPrecio)}} variant="outlined" label="Precio MXN" error={(isWrong && precio==="")} helperText={(isWrong && precio==="")?"Requerido":""} /></Grid>
            </Grid>
            <Box padding={1}/>
            <Typography variant="h5">Fotos del Inmueble</Typography>
            <Divider/>
            <Box padding={1}/>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map((tile) => (
                    <GridListTile key={tile.title}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
            <Box display="flex" justifyContent="center" alignItems="center" margin={2} flexWrap="wrap">
                    <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        className={classes.selectBigger}
                    >
                        Subir Foto
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            multiple
                            ref={imgs}
                            onChange={changeImages}
                        />
                    </Button>
            </Box>
            <Divider/>
            <Box width="60%" margin="auto" marginTop={2}>
                    <Button variant="outlined" type={"submit"} fullWidth color="secondary">
                        Registrar Nuevo Inmueble
                    </Button>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical:"bottom", horizontal:"right"}} onClose={handleAlertClose}>
                <Alert severity="error" variant="filled" onClose={handleAlertClose}>
                    {alertMessage}
                </Alert>
            </Snackbar>
            <OkDialog open={successDialog} 
                    title={`¡Publicación Exitosa de ${title}!`}
                    message={`La publicación ha sido registrada con éxito y ya es visible en el sistema, puedes gestionarla desde "Gestión de inmuebles".`}
                    onOk={handleOnOk}/>
        </form>
    );
}