import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      flexGrow: 4,
    },
  }),
);


const Navigation = () =>{
    const classes = useStyles();

    return (
        <div>
            <AppBar position='sticky'>
                <ToolBar>
                    <Typography variant="h6" className={classes.title}>
                    TROBIFY-IPN
                    </Typography>
                    <Button variant="text" color="inherit">Login</Button>
                </ToolBar>
            </AppBar>
        </div>
    );    
};

export default Navigation;