import userActionType from "../action/UserAction";

export const initialState = {
  isLoading: false,
  repositories: [],
  organizations: [],
};

export const userReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case userActionType.ADD_USER_INFO: {
      console.log(action.payload, 'action.payload');
      return {
        ...state,
        repositories: [...action.payload.repositories],
        organizations: [...action.payload.organizations],
        isLoading: false,
      };
    }

    case userActionType.SET_LOADING: {
      console.log('action.payload', action.payload);
      return {
        isLoading: action.payload.isLoading,
      };
    }

    default:
      return state;
  }
};