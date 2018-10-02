import { get, post, put } from 'axios';
import { API_URL } from './constants';

const fetchAuth = () =>
    dispatch(requestAuth())
    dispatch =>
        post(`${API_URL}/login`, {
            headers: { 'Content-Type': 'application/json' },
            email: "mondo@example.com",
            password:"hunter2"
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json =>
            dispatch(receiveAuth(json))
        )
};


const fetchApps = ({ auth_token }) =>
    dispatch(requestApps)
    dispatch =>
        get(`${API_URL}/apps`, {
            headers: { Authorization: auth_token }
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json =>
            dispatch(recieveApps(json))
        )
};

const fetchAppUpdate = ({ auth_token, app_id }) =>
    dispatch(requestAppUpdate)
    dispatch =>
        put(`${API_URL}/apps/${app_id}`, {
            headers: { Authorization: auth_token }
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json =>
            dispatch(recieveAppUpdate(json))
        )
};

const fetchAppUsers = ({ auth_token, app_id, page_number = 0 }) =>
    dispatch(requestAppUsers)
    dispatch =>
        put(`${API_URL}/apps/${app_id}/users?offset=${page_number * 25}`, {
            headers: { Authorization: auth_token }
        })
        .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
        )
        .then(json =>
            dispatch(recieveAppUsers(json))
        )
};
