import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.success.main,
    color: 'white'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography variant="h3" component="h1">
        PerxTech
      </Typography>
    </Box>
  );
};

export default Header;