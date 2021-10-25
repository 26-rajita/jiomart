import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// The login details are filled in this text field//
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function ColorTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField
        id="outlined-Primary"
        label="Email ID / Phone number"
        variant="outlined"
        color="secondary"
      />


    </form>
  );
}
