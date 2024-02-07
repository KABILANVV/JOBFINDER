import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Lock from '@material-ui/icons/Lock';
import Mail from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
// import Logo from './Assets/logo-sample.svg'

const theme = createTheme({
  palette:{
    primary:{main: '#F5B62A'},
    secondary:{main:'#383938'},
  }
});

const useStyles = makeStyles((theme) => ({
    box : {

    },
  paper: {
    marginTop: theme.spacing(3 ),
    background:"#706ac4 ",
    // backgroundImage:  'url("back1.jpg")',
    backgroundSize:"100%",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    width:"80vh",
    height:"80vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 25px',
    backgroundColor: 'powder blue',
    borderradius: '4px',
    color:"rgba(1, 105,   113)",
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
  },
  input:{

    color:"#8beedc",

  },
  word:{
    textShadow:"-1px 1px 0 white, 1px 1px 0 #F5B62A, 1px -1px 0 #F5B62A, -1px -1px 0 white ; ",
    color:"#F5B62A",
  },
  word2:{
    // textShadow:"-1px 1px 0 black, 1px 1px 0 white, 1px -1px 0 #7bddcc, -1px -1px 0 white ; ",
    color:"#F5B62A",
  },
  
  avatar: {
    margin: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    color:"white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:"white",
  },
  signup: {
    margin: theme.spacing(-2, 0, 2),
    color:"white",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div>
    <MuiThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm">
    <CssBaseline />
    <div className={classes.paper}>
      <Grid 
            container
            direction="row"
            justify-content="center"
            alignItems="center"
            >   
            <Grid item xs={9}>
            </Grid>
            </Grid>
        
        <Typography component="div">
          <Box fontSize={30}  fontWeight={600} m={-2} className={classes.word}>
          SIGN IN
          </Box>
          </Typography>
        <Typography component="div">
        <Box fontSize={18} m={1} padding className={classes.word2}>
        Sign into your account
        </Box>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid 
          container
          direction="row"
              justifyContent="center"
              alignItems="center"
              >
              <Grid item xs={9}>
              <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                style:{
                  color :"black",
                }
              }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><Mail color="disabled"/></InputAdornment>,
              }}
              />
            </Grid>
            
            <Grid item xs={9}>
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
              InputLabelProps={{
                style:{
                  color :"black",
                }
              }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><Lock color="disabled" /></InputAdornment>,
              }}
              />
            </Grid>
            
            <Grid item xs={9} >
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            m={0}
            >
            
            <Link to="/" style={{textDecoration:"none"}}>
                Sign In
                </Link>
              </Button>
              </Grid>
              
              <Grid item>
              </Grid>
                 
              <Grid item xs={8}>  
              <Typography component="div">
              <Box fontSize={18} m={3} paddingT>
              <h6 color="secondary" >
              YOU DO NOT HAVE AN ACCOUNT?
              </h6>
              </Box>
              </Typography>
              </Grid>
              <br/>
              <br/>
              <br/>
              <br/>
              <Grid item xs={9}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.signup}
              m={-1}
              >
              <Link to="/signup" style={{textDecoration:"none"}}>
              SIGN UP
              </Link>
              </Button>
              </Grid>
              
              </Grid>
              
              
              </form>
              </div>
              </Container>
              </MuiThemeProvider>
              </div>
              );
            }