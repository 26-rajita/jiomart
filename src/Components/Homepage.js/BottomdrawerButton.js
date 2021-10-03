import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TemporaryDrawer from './bottomdrawer';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Bottomdrawerbutton() {
  const classes = useStyles();

  return (
    <div>
      <div>
        
        <Button size="medium" className={classes.margin}>
         
        </Button>
       
      </div>
     
     
       
      </div>
    
  );
}
