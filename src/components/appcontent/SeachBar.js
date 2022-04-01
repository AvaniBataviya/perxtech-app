import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { getAllOrganizations, getAllRepositories } from '../../api';
import { useDispatch } from 'react-redux';
import userActionType from '../../action/UserAction';

const SeachBar = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const onSearch = () => {

    Promise.all([getAllRepositories(userName), getAllOrganizations(userName)])
      .then((response) => {
        if (response) {
          dispatch({
            type: userActionType.ADD_USER_INFO,
            payload: { repositories: response[0], organizations: response[1] }
          });
        }
      }).catch(() => {
        dispatch({ type: userActionType.SET_LOADING, payload: { isLoading: true } });
      });
  };

  return (
    <Grid item xs={12}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <TextField
          name="userName"
          id="userName"
          label="Enter github user name"
          value={userName}
          style={{ marginRight: '16px', minWidth: '200px' }}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          id="Search"
          disabled={userName.length === 0}
          onClick={onSearch}
        >
          Search
        </Button>
      </Box>
    </Grid>
  );
};

export default SeachBar;