import React from 'react';
import clsx from 'clsx';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link, Router} from "react-router-dom";

import CreateaccountButtons from './createandloginbutton';
//Thid drawer is used for signup popup//
const useStyles = makeStyles({
 


  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    textAlign: 'center',
    
  },

});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    
    left: false,
    bottom: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Paper className={classes.paper}>ACCOUNT</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={12}>
          <Grid item md={12}>
            <Paper className={classes.paper}> New to jioMart ? sign up to create a new account</Paper>

          </Grid>
        </Grid>

        <Grid item xs= {12} sm={12}>
        <ListItem>

        <Link to={process.env.PUBLIC_URL + '/signup'}>
       <CreateaccountButtons variant="contained" color="primary"  href="">
        Create New account
      </CreateaccountButtons> 
      
      
      

      </Link>
        </ListItem>
        </Grid>
      </List>
      <Divider />
      
      <Grid container spacing={12}>
        <Grid item md={12}>
          <Paper className={classes.paper}> Already have an account ? Login into your existing account </Paper>
        </Grid>
      </Grid>
      <List>
        <ListItem>

      <Link to={process.env.PUBLIC_URL + '/Login'}>
      <Button variant="contained" color="primary" href="">
        Login
      </Button>
      </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>

      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor} Sign up / Login</Button>

          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
