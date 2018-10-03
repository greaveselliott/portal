import axios from 'axios';
import {
  API_URL,
  AUTH_REQUEST,
  AUTH_RECEIVE,
  AUTH_ERROR,
  APPS_REQUEST,
  APPS_RECEIVE,
  APP_UPDATE_REQUEST,
  APP_UPDATE_RECEIVE,
  APP_USERS_REQUEST,
  APP_USERS_RECEIVE
} from './constants';

export const requestAuth = () => ({
  type: AUTH_REQUEST
});

export const receiveAuth = ({ accessToken }) => ({
  type: AUTH_RECEIVE,
  accessToken
});

export const errorAuth = () => ({
  type: AUTH_ERROR
});

export const fetchAuth = ({ email, password }) => dispatch => {
  dispatch(requestAuth());
  axios
    .post(`${API_URL}/login`, {
      headers: { 'Content-Type': 'application/json' },
      email,
      password
    })
    .then(json => dispatch(receiveAuth(json.data)), error => dispatch(errorAuth(error)));
};

export const requestApps = () => ({
  type: APPS_REQUEST
});

export const receiveApps = ({ apps }) => ({
  type: APPS_RECEIVE,
  apps
});

export const fetchApps = ({ accessToken }) => dispatch => {
  dispatch(requestApps);
  axios
    .get(`${API_URL}/apps`, {
      headers: { Authorization: accessToken }
    })
    .then(response => response.json(), error => console.log('An error occurred.', error))
    .then(json => dispatch(receiveApps(json)));
};

export const requestAppUpdate = () => ({
  type: APP_UPDATE_REQUEST
});

export const receiveAppUpdate = ({ app }) => ({
  type: APP_UPDATE_RECEIVE,
  app
});

export const fetchAppUpdate = ({ accessToken, appId }) => dispatch => {
  dispatch(requestAppUpdate);
  axios
    .put(`${API_URL}/apps/${appId}`, {
      headers: { Authorization: accessToken }
    })
    .then(response => response.json(), error => console.log('An error occurred.', error))
    .then(json => dispatch(receiveAppUpdate(json)));
};

export const requestAppUsers = () => ({
  type: APP_USERS_REQUEST
});

export const recieveAppUsers = ({ users }) => ({
  type: APP_USERS_RECEIVE,
  users
});

export const fetchAppUsers = ({ accessToken, appId, pageNumber = 0 }) => dispatch => {
  dispatch(requestAppUsers);
  axios
    .put(`${API_URL}/apps/${appId}/users?offset=${pageNumber * 25}`, {
      headers: { Authorization: accessToken }
    })
    .then(response => response.json(), error => console.log('An error occurred.', error))
    .then(json => dispatch(recieveAppUsers(json)));
};
