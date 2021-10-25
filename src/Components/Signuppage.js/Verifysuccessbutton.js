import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { createTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import { Link, Router } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#21DFA8',
    '&:hover': {
      backgroundColor: '#21DFA8',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({

  margin: {
    margin: theme.spacing(1),
    height: '50%',
    width: '50%',
  },

}));
const theme = createTheme({
  palette: {
    primary: green,
  },
});


export default function Snackbars() {


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  return (
    <div className={classes.root}>

      <ColorButton variant="contained" color="primary" onClick={handleClickOpen} onClick={handleClick} className={classes.margin} >
        Verify
      </ColorButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        autoHideDuration={10000}
      >
        <DialogTitle id="alert-dialog-title">{"OTP for account virfication"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            6286 is your OTP for JioMart account registration. Valid till 10hrs. Do not share this OTP to anyone for security reasons.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Copy
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>


      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Your information is successfully saved !
        </Alert>
      </Snackbar>


    </div>
  );
}
