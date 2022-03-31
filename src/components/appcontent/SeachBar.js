import React, { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { getAllOrganisations, getAllRepositories } from '../../api';
import { useDispatch } from 'react-redux';
import userActionType from '../../action/UserAction';

const SeachBar = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch({ type: userActionType.SET_LOADING, payload: { isLoading: true } });
    Promise.all([getAllRepositories(userName), getAllOrganisations(userName)])
      .then((response) => {
        if (response) {
          dispatch({
            type: userActionType.ADD_USER_INFO,
            payload: { repositories: response[0], organizations: response[1] }
          });
        }
      });
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField
        name="userName"
        label="Enter github user name"
        value={userName}
        style={{ marginRight: '16px' }}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={userName.length === 0}
        onClick={onSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default SeachBar;