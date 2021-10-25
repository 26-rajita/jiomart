import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import TemporaryDrawer from './bottomdrawer';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LeftDrawer from './Left Drawer';
import jiologo from '../../Assets/jiologo.png'
import { Grid } from '@material-ui/core';







const useStyles = makeStyles((theme) => ({


  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

  grow: {
    flexGrow: 1,
  },
  alignItems: 'center',
  AppBar: {
    padding: '8%',
    background: 'linear-gradient(to bottom ,#0192CA, #0CAEBE, #13BEB7,#21DFA8)',

    // borderStyle: 'solid none solid none',
    // borderColor: '#B1B1B1',
    boxShadow: '0 0 0 0',
    border: '2 solid red',
    borderRadius: '5',
    height: '20ch'




  },

  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {

    display: 'none',
    [theme.breakpoints.down('xl')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
      margin: '1',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey',
    borderRadius: '100'
  },
  inputRoot: {
    color: 'grey',
  },
  inputInput: {
    padding: theme.spacing(1, 2, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '110ch',

    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '50ch',

    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      width: '50ch',




    },
  },
}));


export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);



  const handleProfileMenuOpen = (event) => {

  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {

    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  function FormRow() {
    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';


    const classes = useStyles();
    const handleToggle = () => {
      setOpen(!open);
    };

    return (

      <div className={classes.grow}>
        <AppBar position="static" className={classes.AppBar}
        >
          <Toolbar
          >
            <Grid container spacing={2}>
              <Grid item xl={1} xs={2}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <LeftDrawer />
                </IconButton>
              </Grid>
              <Grid item xl={6} xs={5}>
                <div>

                  {/* <Typography className={classes.title} variant="h6" noWrap>
                JioMart
              </Typography> */}
                  <img src={jiologo} className="image" alt="Logo" width="100" height="100%"
                  />
                </div>
              </Grid>


              <Grid item xl={1} xs={2}>
                <div className={classes.grow} />
                <div>

                  <IconButton

                    color="inherit"
                  >
                    <TemporaryDrawer />

                  </IconButton>


                </div>
              </Grid>

              <Grid item xl={1} xs={2}>
                <div>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                </div>
              </Grid>

              <div className={classes.search} >
                <div className={classes.searchIcon}
                >
                  <SearchIcon />

                </div>
                <InputBase
                  placeholder="Search essentials..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    position: 'bottm',
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>


            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>

      </Grid>
    </div>

  );
}
