import { AppBar, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import {ReactComponent  as MyLogo} from "../../images/icon/myLogo.svg";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#000000'
  },
  appbar: {
    alignItems: 'center',
  },
  typography: {
    flexGrow: 1,
    align: "center"
      }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" style={{ background: '#fff' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MyLogo width={26} />
          </IconButton>
          <Grid container spacing={1} justify="flex-end">
            <Grid item spacing={1}>
              <Typography variant="subtitle1" className={classes.title}>
                Home
              </Typography>
            </Grid>
            <Grid item spacing={1}>
              <Typography variant="subtitle1" className={classes.title}>
                About
              </Typography>
            </Grid>
            <Grid item spacing={1}>
              <Typography variant="subtitle1" className={classes.title}>
                Design
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;