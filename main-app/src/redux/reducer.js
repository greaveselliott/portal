import updateObjectInArray from './services/update-object-in-array';

const app = (state = { accessToken: undefined, apps: [], users: [] }, action) => {
  switch (action.type) {
    case 'AUTH_RECEIVE':
      return {
        ...state,
        accessToken: action.accessToken
      };

    case 'APPS_RECEIVE':
      return {
        ...state,
        apps: action.apps
      };

    case 'APP_UPDATE_RECEIVE':
      return {
        ...state,
        apps: updateObjectInArray(state.apps, action.app)
      };

    case 'APP_USERS_RECEIVE':
      return {
        ...state,
        users: action.users
      };

    default:
      return state;
  }
};

export default app;
