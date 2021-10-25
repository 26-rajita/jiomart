/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//Link to resend OTP//

const useStyles = makeStyles((theme) => ({

  margin: {
    margin: theme.spacing(1),
    backgroundColor: 'White'
  },
}));
export default function ButtonLink() {
  const classes = useStyles();


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link
        onClick={handleClickOpen}
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        <Button variant="contained" color="inherit" onClick={handleClickOpen} className={classes.margin}>
          Resend OTP
        </Button>

      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"OTP for account virfication"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            your new OTP is 8935  for JioMart account registration. Valid till 10hrs.
            Do not share this OTP to anyone for security reasons.
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
    </div>
  );
}
