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
import { useRouter } from 'next/router'

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
    const {isLogged, logout} = useUser();

    const handleLogout = () => {
      logout();
      router.push("/");
    }

    const buttons = isLogged ? 
      <>
        <Button variant="outlined" color="inherit" onClick={handleLogout} className='navbar-button'>Logout</Button>
      </>
      :
      <>
      <Link href="/signin">
        <Button variant="text" className='navbar-button' color="inherit">Sign In</Button>
      </Link>
        <Button variant="outlined" color="inherit">Sign Up</Button>
      </>;
      

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
        </div>
    );    
};

export default Navigation;