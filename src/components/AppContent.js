import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SeachBar from './appcontent/SeachBar';
import Listing from './appcontent/Listing';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexGrow: 1,
    backgroundColor: '#e9e9e9'
  },
}));

const AppContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <SeachBar />
        <Listing />
      </Grid>
    </div>
  );
};

export default AppContent;;