import React, {Component, useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Styles & resources
import { makeStyles } from '@material-ui/core/styles';
// import '../style/components/Header.scss';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Components
import MenuComponent from './MenuComponent';


const useStyles = makeStyles({
  root       : { flexGrow: 1, },
  menuButton : { marginRight: 16, },
  title      : { flexGrow: 1, },
});


const DenseAppBar = () => {
  const classes = useStyles();
  const [auth/*, setAuth*/] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <MenuComponent />
          <Typography variant="h4" color="inherit" className={classes.title} noWrap>
            Chatbot Interface [Demo]
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default class header extends Component {
   
  render() {
    return (
      <header>
        <DenseAppBar />
      </header>
    );
  }

}