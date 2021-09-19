import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>


        <TextField
          label="OTP"
          id="outlined-margin-normal"
          defaultValue="*"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-margin-normal"
          defaultValue="*"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-margin-normal"
          defaultValue="*"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-margin-normal"
          defaultValue="*"
          className={classes.textField}
          helperText="Insert OTP required"
          margin="normal"
          variant="outlined"
        />

      </div>
    </div>
  );
}
