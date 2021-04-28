import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Navigation = () =>{

    return (
        <div>
            <AppBar position='sticky'>
                <ToolBar>
                    <Typography variant="h6" className='navbar-title'>
                    TROBIFY-IPN
                    </Typography>
                    <Button variant="text" className='navbar-button' color="inherit">Sign In</Button>
                    <Button variant="outlined" color="inherit">Sign Up</Button>
                </ToolBar>
            </AppBar>
        </div>
    );    
};

export default Navigation;