import { Box, CircularProgress, Link, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  coulmn: {
    padding: theme.spacing(3),
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '22px'
  }
}));

const Listing = () => {
  const classes = useStyles();
  const { repositories, organizations, isLoading } = useSelector((state) => state.userReducer);
  const userData = [
    { title: 'Repositories', data: repositories, key: 'name' },
    { title: 'Organization', data: organizations, key: 'login' },
  ];

  return (
    <Box mt={3} display="flex" justifyContent="center">
      {
        isLoading ?
          <CircularProgress />
          : userData.map((sectionData, index) => {
            return (
              <Box className={classes.coulmn}
                key={sectionData.title}
                style={{ borderRight: index === 0 ? '1px solid' : '' }}
              >
                <Typography component="h4" className={classes.title}>
                  {sectionData.title}
                </Typography>
                <Box>
                  <List dense>
                    {

                      sectionData.data?.length > 0 ? sectionData.data.map((repo) => {
                        return (
                          <ListItem key={repo.id} button >
                            <Link href={repo.url} underline="none" target="_blank" rel="noreferrer">
                              <ListItemText primary={repo[sectionData.key]} />
                            </Link>
                          </ListItem>
                        );
                      }) :
                        <Typography component="h4" variant="subtitle2">
                          No Data Found
                        </Typography>
                    }
                  </List>
                </Box>
              </Box>
            );
          })
      }
    </Box>
  );
};

export default Listing;