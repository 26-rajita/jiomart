import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

//All the signup details will be filled in this text field//
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={12} sm={12}>
            <AccountCircle />
            <TextField id="input-with-icon-grid" label="Name" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={12} sm={12}>
            <AccountCircle />
            <TextField id="input-with-icon-grid" label="Surname" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={12} sm={12}>
            <AccountCircle />
            <TextField id="input-with-icon-grid" label="Enter pincode" />
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={12} sm={12}>
            <AccountCircle />
            <TextField id="input-with-icon-grid" label="Email ID" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={12} sm={12}>
            <AccountCircle />
            <TextField id="input-with-icon-grid" label="Phone number" />
          </Grid>
        </Grid>
        </Grid>
      </div>
    </div>
  );
}
