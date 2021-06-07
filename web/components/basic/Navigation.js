import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Hidden from '@material-ui/core/Hidden'
import useUser from '../../utils/UserHook';
import {Divider, Menu, MenuItem} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '18ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));


const Navigation = () =>{
    const classes = useStyles();
    const router = useRouter();
    const {isLogged, logout, userType} = useUser();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
      logout();
      setAnchorEl(null);
      router.push("/");
    }

    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };


    const buttons = isLogged ? 
      <>
        <Button variant="outlined" color="inherit" onClick={handleProfileMenuOpen} className='navbar-button'>Menu</Button>
      </>
      :
      <>
      <Link href="/signin">
        <Button variant="text" className='navbar-button' color="inherit">Sign In</Button>
      </Link>
      <Link href="/registro/cliente">
        <Button variant="outlined" color="inherit">Sign Up</Button>
      </Link>
      </>;

    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <Link href="/inmuebles/gestionInmueble">
        <MenuItem onClick={handleMenuClose}>Gestionar Inmuebles</MenuItem>
        </Link>
        <Link href="/inmuebles/historialVisitas">
        <MenuItem onClick={handleMenuClose}>Historial de Visitas</MenuItem>
        </Link>
        {userType==="cliente"?
        <Link href="/cliente/gestionFavoritos">
        <MenuItem onClick={handleMenuClose}>Favoritos</MenuItem>
        </Link>:""}
        <Divider/>
        <MenuItem onClick={handleLogout}><b>Logout</b></MenuItem>
      </Menu>
    );  


    return (
        <div>
            <AppBar position='fixed'>
                <ToolBar>
                    <Link href="/">
                    <Typography variant="h6" className='navbar-title'>
                    TROBIFY-IPN
                    </Typography>
                    </Link>
                    <Hidden only={["xs"]}>
                      <div className={classes.search}>
                          <div className={classes.searchIcon}>
                          <SearchIcon />
                          </div>
                          <InputBase
                          placeholder="Buscar Inmueble…"
                          classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                          />
                      </div>
                      </Hidden>
                    {buttons}
                </ToolBar>
            </AppBar>
            {renderMenu}
        </div>
    );    
};

export default Navigation;