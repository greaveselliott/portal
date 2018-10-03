import axios from 'axios';
import { API_URL, AUTH_RECEIVE, APPS_RECEIVE, APP_UPDATE_RECEIVE, APP_USERS_RECEIVE, FETCH_ERROR } from './constants';

export const receiveAuth = ({ accessToken }) => ({
  type: AUTH_RECEIVE,
  accessToken
});

export const fetchError = () => ({
  type: FETCH_ERROR
});

export const fetchAuth = ({ email, password }) => dispatch => {
  axios
    .post(`${API_URL}/login`, {
      headers: { 'Content-Type': 'application/json' },
      email,
      password
    })
    .then(json => dispatch(receiveAuth(json.data)), error => dispatch(errorAuth(error)));
};

export const receiveApps = ({ apps }) => ({
  type: APPS_RECEIVE,
  apps
});

export const fetchApps = ({ accessToken }) => dispatch => {
  axios
    .get(`${API_URL}/apps`, {
      headers: { Authorization: accessToken }
    })
    .then(response => response.json(), error => console.log('An error occurred.', error))
    .then(json => dispatch(receiveApps(json)));
};

export const receiveAppUpdate = ({ app }) => ({
  type: APP_UPDATE_RECEIVE,
  app
});

export const fetchAppUpdate = ({ accessToken, appId }) => dispatch => {
  axios
    .put(`${API_URL}/apps/${appId}`, {
      headers: { Authorization: accessToken }
    })
    .then(response => response.json(), error => console.log('An error occurred.', error))
    .then(json => dispatch(receiveAppUpdate(json)));
};

export const recieveAppUsers = ({ users }) => ({
  type: APP_USERS_RECEIVE,
  users
});

export const fetchAppUsers = ({ accessToken, appId, pageNumber = 0 }) => dispatch => {
  axios
    .put(`${API_URL}/apps/${appId}/users?offset=${pageNumber * 25}`, {
      headers: { Authorization: accessToken }
    })
    .then(response => response.json(), error => console.log('An error occurred.', error))
    .then(json => dispatch(recieveAppUsers(json)));
};
