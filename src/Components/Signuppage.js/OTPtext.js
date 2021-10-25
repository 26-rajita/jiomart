import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'center',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '20%',
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

          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-margin-normal"

          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-margin-normal"

          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-margin-normal"

          className={classes.textField}
          helperText=""
          margin="normal"
          variant="outlined"

        />


      </div>
    </div>
  );
}
