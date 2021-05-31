import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import axios from 'axios';
import useUser from '../../utils/UserHook';
import {useRouter} from 'next/router'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Trobify-IPN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 64px)",
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?home,building)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const {login} = useUser();

  //Aux states
  const [error, setError] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  const router = useRouter();

  const handleSubmit= (e)=>{
    e.preventDefault();
    if(pswd.length<8){
      setError(true);
    }else{
      const auth ={
        correo:email,
        contrasena:pswd
      }

      axios.post('http://localhost:8000/auth/login', auth)
        .then(res=>{
          login(res.data.nombre,res.data.correo,res.data.tipo,res.data.token);
          router.push("/");
        })
        .catch(error=>{
          if(error.response){
            if(!error.response.data.ok){
              if(error.response.data.errors){
                setAlertMessage("Correo y/o contraseña invalidos");
              }else{
                setAlertMessage("Correo y/o contraseña incorrectos");
              }
            }else{
              setAlertMessage("Error de servidor: Intente nuevamente más tarde");
            }
          }else{
            setAlertMessage("Error de conexión con servidor");
          }
          setOpen(true);
          setErrorSubmit(true);
        })
    }

    
  }

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                type="email"
                autoFocus
                type={pswd}
                value={email}
                error={errorSubmit}
                onChange={(e)=>setEmail(e.target.value)}
                onBlur={(e)=>setErrorSubmit(false)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={error && pswd.length<8 || errorSubmit}
                value={pswd}
                helperText={error && pswd.length<8?"Contraseña de menos de 8 carácteres":""}
                onChange={(e)=>setPswd(e.target.value)}
                onBlur={(e)=>setErrorSubmit(false)}

              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"¿No tienes cuenta? ¡Registrate!"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical:"bottom", horizontal:"right"}} onClose={handleAlertClose}>
          <Alert severity="error" variant="filled" onClose={handleAlertClose}>
              {alertMessage}
          </Alert>
      </Snackbar>
    </>
  );
}
