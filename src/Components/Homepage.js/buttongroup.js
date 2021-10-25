import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
//These group of buttons are used for addition and subtraction of the items in the website//
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>Add</Button>

      </ButtonGroup>

    </div>
  );
}
