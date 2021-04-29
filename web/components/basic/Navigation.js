import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

const Navigation = () =>{

    return (
        <div>
            <AppBar position='fixed'>
                <ToolBar>
                    <Link href="/">
                    <Typography variant="h6" className='navbar-title'>
                    TROBIFY-IPN
                    </Typography>
                    </Link>
                    <Link href="/signin">
                    <Button variant="text" className='navbar-button' color="inherit">Sign In</Button>
                    </Link>
                    <Button variant="outlined" color="inherit">Sign Up</Button>
                </ToolBar>
            </AppBar>
        </div>
    );    
};

export default Navigation;