import updateObjectInArray from '../services/update-object-in-array';

const rootReducer = (state = { auth_token: undefined, apps: [], users: []}, action) => {
  switch (action.type) {
      case 'GET_AUTH_TOKEN':
          return {
              ...state,
              auth_token: action.auth_token
          }
      
      case 'FETCH_APPS':
          return {
              ...state,
              apps: action.apps
          }

      case 'UPDATE_APP':
          return {
              ...state,
              apps: updateObjectInArray(state.apps, action.app)
          };

      case 'FETCH_APP_USERS':
          return {
              ...state,
              users: action.users
          };

      default:
          return state;
  }
};


export default rootReducer;
