import axios from 'axios';
import { API_URL, AUTH_RECEIVE, APPS_RECEIVE, APP_UPDATE_RECEIVE, APP_USERS_RECEIVE, FETCH_ERROR } from './constants';

export const fetchError = () => ({
  type: FETCH_ERROR
});

export const receiveApps = ({ apps }) => ({
  type: APPS_RECEIVE,
  apps
});

export const fetchApps = ({ accessToken }) => dispatch => {
  axios
    .get(`${API_URL}/apps`, {
      headers: { Authorization: accessToken }
    })
    .then(json => dispatch(receiveApps(json.data)), error => dispatch(fetchError(error)));
};

export const receiveAuth = ({ accessToken }) => ({
  type: AUTH_RECEIVE,
  accessToken
});

export const fetchAuth = ({ email, password }) => dispatch => {
  axios
    .post(`${API_URL}/login`, {
      headers: { 'Content-Type': 'application/json' },
      email,
      password
    })
    .then(json => dispatch(receiveAuth(json.data)), error => dispatch(fetchError(error)))
    .then(auth => dispatch(fetchApps(auth)), error => dispatch(fetchError(error)));
};

export const receiveAppUpdate = ({ app }) => ({
  type: APP_UPDATE_RECEIVE,
  app
});

export const fetchAppUpdate = ({ accessToken, id, appValues }) => dispatch => {
  axios
    .put(`${API_URL}/apps/${id}`, appValues, {
      headers: { Authorization: accessToken }
    })
    .then(json => dispatch(receiveAppUpdate(json.data)), error => dispatch(fetchError(error)));
};

export const recieveAppUsers = ({ users }) => ({
  type: APP_USERS_RECEIVE,
  users
});

export const fetchAppUsers = ({ accessToken, id, pageNumber = 0 }) => dispatch => {
  axios
    .get(`${API_URL}/apps/${id}/users?offset=${pageNumber * 25}`, {
      headers: { Authorization: accessToken }
    })
    .then(json => dispatch(recieveAppUsers(json.data)), error => dispatch(fetchError(error)));
};
