import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Link, useNavigate } from 'react-router-dom';
import DrawerComponent from './Drawer';
import logo from "../assets/logo5-rem.png";
import "../Css/nav.css";
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    height: 75,
    width: 150
  },
  side: {
    flexGrow: 0.1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleSignUp = () => {
    handleOpen()
    navigate("/login")
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <AppBar position="static" style={{ backgroundColor: '#bed5ff' }}>
    <Toolbar>
    <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    className={classes.menuButton}
    >
    <DrawerComponent/>
    </IconButton>
    <Typography variant="h6" className={classes.title}>
    <img src={logo} className={classes.logo}/> 
    </Typography>
    <Typography variant="h6" className={classes.side}>
    <Link to="/about" style={{textDecoration:"none"}}>
    About
    </Link>
    </Typography>
    <Typography variant="h6" className={classes.side}>
    <Link to="/dashboard" style={{textDecoration:"none"}}>
    DashBoard
    </Link>
    </Typography>
    <Button color="inherit" style={{textTransform:"none"}}>
    <Link to="/signin" style={{textDecoration:"none"}}>
    Register
    </Link>
    </Button>
    </Toolbar>
    </AppBar>
    </div>
    );
  };
  
export default Navbar;