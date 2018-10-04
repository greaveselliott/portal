const updateApp = (apps, nextApp) =>
  apps.map(prevApp => {
    if (prevApp.id === nextApp.id) {
      return {
        ...prevApp,
        ...nextApp
      };
    }

    return {
      ...prevApp
    };
  });

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
        apps: updateApp(state.apps, action.app)
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
