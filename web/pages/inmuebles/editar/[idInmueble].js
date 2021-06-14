import Head from 'next/head'
import {Box, Container, Typography, Divider, TextField, Paper ,
        Grid, FormControl, InputLabel, Select, MenuItem, Button,
        Snackbar} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import OkDialog from '../../../components/basic/OkDialog'
import { useRouter } from 'next/router'
import useUser from '../../../utils/UserHook'
import axios from 'axios'
import cookies from 'next-cookies';

export default function RegistrarInmueble( {inmuebleData} ){

    return(
        <>
            <Head>
                <title>Trobify: Editar Inmueble</title>
            </Head>
            <Box minHeight="64px"></Box>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={3}>
                    <Typography variant="h3" color="secondary">Edita Inmueble</Typography>
                </Box>
                <Paper elevation={3}>
                    <Box padding={5}>
                        <FormNuevoInmueble inmuebleData={inmuebleData}/>
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

const FormNuevoInmueble = ({inmuebleData})=>{
    const classes = useStyles();
    const { userType, userEmail, userName } = useUser();

    //Form states
    const [title, setTitle] = useState(inmuebleData.titulo);
    const [description, setDescription] = useState(inmuebleData.descripcion);
    const [surface, setSurface] = useState(inmuebleData.superficie);
    const [nGarage, setNGarage] = useState(inmuebleData.nGarage);
    const [nRooms, setNRooms] = useState(inmuebleData.nRecamaras);
    const [nBathrooms, setNBathrooms] = useState(inmuebleData.nBanios);
    const [characteristics, setCharacteristics] = useState(inmuebleData.caracteristicas);
    const [propietaryName, setPropietaryName] = useState(inmuebleData.propietario);
    const [tipoTransaccion, setTipoTransaccion] = useState(inmuebleData.transaccion==="Venta"?1:2);
    const [precio, setPrecio] = useState(inmuebleData.precio);
    //Aux states
    const [isWrong, setIsWrong] = useState(false);
    const [open, setOpen] = useState(false);
    const [successDialog, setSuccessDialog] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    //Router
    const router = useRouter();

    const editInmueble = async () => {
        
        var data={
            inmueble_id: inmuebleData.idinmueble,
            descripcion: description,
            caracteristicas: characteristics, 
            precio: precio,
            superficie: surface,
            nGarage: nGarage,
            nBanios: nBathrooms,
            nRecamaras: nRooms,
            propietario: propietaryName,
            tipo_transaccion: (tipoTransaccion===1)?"Venta":"Renta"
        }

        axios({
            method: "post",
            url: process.env.SERVER_URL+"/inmueble/inmueble/editar",
            data: data,
        })
        .then((res) =>{
            console.log(res);
            setSuccessDialog(true);
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
         (propietaryName==="") ||  precio==="" );

        if(someoneIsMissing){
            setIsWrong(true);
            setAlertMessage("Datos incompletos");
            setOpen(true);
        }else{
            setIsWrong(false);
            editInmueble();
        }
    }

    const handleNumber = (value,callback) =>{
        if(value>=0)
            callback(value);
    } 

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleOnOk = () =>{
        setSuccessDialog(false);
        router.push("/inmuebles/gestionInmueble");
    }

    const hanldeInputE = (evt) => evt.key === 'e' && evt.preventDefault();

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5">Datos de la Publicación</Typography>
            <Divider/>
            <div className={classes.center}>
                <Typography variant="h4" >{title}</Typography>
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
                    <Grid item> <TextField type="number" min={0} className={classes.txtsmall} variant="outlined" label="Superficie m²" value={surface} onChange={(e)=>{handleNumber(e.target.value, setSurface)}} onKeyDown={hanldeInputE} error={isWrong && surface===""} helperText={(isWrong && surface==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Garages" value={nGarage} onChange={(e)=>{handleNumber(e.target.value, setNGarage)}} onKeyDown={hanldeInputE}  error={isWrong && nGarage===""} helperText={(isWrong && nGarage==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Cuartos" value={nRooms} onChange={(e)=>{handleNumber(e.target.value, setNRooms)}} onKeyDown={hanldeInputE}  error={isWrong && nRooms===""} helperText={(isWrong && nRooms==="")?"Requerido":""} /></Grid>
                    <Grid item> <TextField type="number" className={classes.txtsmall} variant="outlined" label="No. Baños" value={nBathrooms} onChange={(e)=>{handleNumber(e.target.value, setNBathrooms)}} onKeyDown={hanldeInputE}  error={isWrong && nBathrooms===""} helperText={(isWrong && nBathrooms==="")?"Requerido":""} /></Grid>
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
            {/* <div className={(isTabletOrBigger && isPropietary==="No")?classes.divPropietario:""}>  */}
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
            {/* </div> */}
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
                        label="Tipo de Transacción"
                        >
                        <MenuItem value={1}>Venta de Inmueble</MenuItem>
                        <MenuItem value={2}>Alquiler de Inmueble</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item> <TextField value={precio} type="number" className={classes.selectBigger} onChange={(e)=>{handleNumber(e.target.value,setPrecio)}} onKeyDown={hanldeInputE} variant="outlined" label="Precio MXN" error={(isWrong && precio==="")} helperText={(isWrong && precio==="")?"Requerido":""} /></Grid>
            </Grid>
            <Box padding={1}/>
            <Box display="flex" justifyContent="center">
                <Box padding={2} width="90%" color="#b09f53" bgcolor="#f5dd76" borderRadius={15} display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                <Typography variant="h6">
                        Aviso:   
                    </Typography> 
                    <Typography variant="body1">
                        Los datos como el título, imágenes, y domicilio no podrán ser modificados por razones de seguridad, en caso de necesitar un cambio, favor de crear un nuevo inmueble.
                    </Typography>
                </Box>
            </Box>
            <Box padding={1}/>
            <Box width="60%" margin="auto" marginTop={2}>
                    <Button variant="outlined" type={"submit"} fullWidth color="secondary">
                        Editar Inmueble
                    </Button>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical:"bottom", horizontal:"right"}} onClose={handleAlertClose}>
                <Alert severity="error" variant="filled" onClose={handleAlertClose}>
                    {alertMessage}
                </Alert>
            </Snackbar>
            <OkDialog open={successDialog} 
                    title={`¡Edición Exitosa de ${title}!`}
                    message={`Los datos del inmueble fueron editados exitosamente y ya son visibles en el sistema.`}
                    onOk={handleOnOk}/>
        </form>
    );
}


export async function getServerSideProps(context) {
    if(!cookies(context).jwt){ //Reload?
        const { res } = context;
        res.setHeader("location", "/");
        res.statusCode = 302;
        res.end();
    }else{
        const idInmueble=context.query.idInmueble;
        try{
            const resInmuebleUnit= await axios.get(process.env.SERVER_URL+'/inmueble/unitario/'+idInmueble);
            if(!resInmuebleUnit.data.ok){
                throw new Error("No existe el inmueble");
            }
            const inmuebleData= resInmuebleUnit.data.data;
    
            return {
                props: { inmuebleData }
            }
        }catch(er){
            console.log(er);
            const { res } = context;
            res.setHeader("location", "/404");
            res.statusCode = 302;
            res.end();
        }    
    }

    return {
        props: {}
    }
}