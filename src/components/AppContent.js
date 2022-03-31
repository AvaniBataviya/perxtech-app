import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';
import SeachBar from './appcontent/SeachBar';
import Listing from './appcontent/Listing';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '65vw',
    margin: '32px  auto',
    minHeight: '400px'
  },
}));

const AppContent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <SeachBar />
        <Listing />
      </CardContent>
    </Card>
  );
};

export default AppContent;;