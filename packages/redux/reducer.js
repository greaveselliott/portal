import {
  AUTH_RECEIVE,
  APPS_RECEIVE,
  APP_UPDATE_RECEIVE,
  APP_USERS_RECEIVE,
  FETCH_ERROR,
  GOTO_EDIT_PAGE,
  GOTO_USERS_PAGE,
  GOTO_APPS_PAGE,
  GOTO_LOGIN_PAGE
} from './constants';

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

const app = (
  state = { accessToken: undefined, apps: [], users: [], isEditing: false, isViewingUsers: false },
  action
) => {
  switch (action.type) {
    case AUTH_RECEIVE:
      return {
        ...state,
        accessToken: action.accessToken
      };

    case APPS_RECEIVE:
      return {
        ...state,
        apps: action.apps
      };

    case APP_UPDATE_RECEIVE:
      return {
        ...state,
        apps: updateApp(state.apps, action.app)
      };

    case APP_USERS_RECEIVE:
      return {
        ...state,
        isViewingUsers: true,
        users: action.users
      };

    case FETCH_ERROR:
      return {
        ...state,
        accessToken: undefined
      };

    case GOTO_EDIT_PAGE:
      return {
        ...state,
        isEditing: true
      };

    case GOTO_USERS_PAGE:
      return {
        ...state,
        isViewingUsers: true
      };

    case GOTO_APPS_PAGE:
      return {
        ...state,
        isEditing: false,
        isViewingUsers: false
      };

    case GOTO_LOGIN_PAGE:
      return {
        ...state,
        accessToken: undefined,
        isEditing: false,
        isViewingUsers: false
      };

    default:
      return state;
  }
};

export default app;
