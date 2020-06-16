/**
 * Header swipeable drawer component
 * Designed for header menu bar ONLY
 * 
 * Purpose: reduce complexity of header.jsx
 * 
 * 16-6-2020: Kevin
 */

import React, {useState} from 'react';
import clsx from 'clsx';

// Material UI Components
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Styles & Media
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInboxOutlined';

const useStyles = makeStyles({
  list     : { width: 250, },
  itemTxt  : { fontSize: 18, },
  fullList : { width: 'auto', },
});

const menuTheme = createMuiTheme({
  typography: {
    h4: {
      fontSize: 18,
      fontWeight: 600,
      margin: '16px 0 0 16px',
    }
  }
});


export default function MenuComponent() {
  const classes = useStyles();
  const [state, setState] = useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    return <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['History'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><InboxIcon fontSize={'large'} /></ListItemIcon>
              <ListItemText primary={text} classes={{ primary: classes.itemTxt}} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  };

  return (
    <>
    {['left'].map((anchor) => (
      <React.Fragment key={anchor}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                    onClick={toggleDrawer(anchor, true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          <ThemeProvider theme={menuTheme}>
            <Typography variant="h4" noWrap={true}>Menu</Typography>
            {list(anchor)}
          </ThemeProvider>
        </SwipeableDrawer>
      </React.Fragment>
    ))}
    </>
  );
}