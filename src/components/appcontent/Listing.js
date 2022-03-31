import { Avatar, Box, Card, CardContent, CircularProgress, Divider, Grid, Link, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
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

  return isLoading
    ? <Box mt={3} width="100%" display="flex" justifyContent="center">
      <CircularProgress id="loading" />
    </Box>
    : userData.map((sectionData) => {
      return (
        <Grid item xs={12} sm={6} key={sectionData.title}>
          <Card>
            <CardContent>
              <Typography component="h4" className={classes.title} id={sectionData.title}>
                {sectionData.title}
              </Typography>
              <Box>
                <List dense>
                  {
                    sectionData.data?.length > 0 ? sectionData.data.map((repo, index) => {
                      const isRepo = sectionData.title === 'Repositories';
                      return (
                        <>
                          <ListItem key={repo.id} button >
                            <ListItemAvatar>
                              <Avatar alt={isRepo ? repo?.owner?.login : repo?.login}
                                src={isRepo ? repo?.owner?.avatar_url : repo?.avatar_url}
                              />
                            </ListItemAvatar>
                            <Link underline="none" href={repo.url} target="_blank" rel="noreferrer">
                              <ListItemText id={repo[sectionData.key]} primary={repo[sectionData.key]} />
                              <ListItemText secondary={repo?.description} display="block" />
                            </Link>
                          </ListItem>
                          {index !== sectionData.data?.length - 0 &&
                            <Divider variant="inset" component="li" />}
                        </>
                      );
                    }) :
                      <Typography component="h4" variant="subtitle2">
                        No Data Found
                      </Typography>
                  }
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      );
    });
};

export default Listing;