import { onUserLoginExpire } from '../actions/user/login';
import { store } from '../index';

export const sendPostRequest = async (path = '', body = {}) => {
    if (!body)
        return null;

    const formattedBody = JSON.stringify(body);

    return fetch(`https://api.projectoi.fr/${path}`, {
        method: "POST",
        body: formattedBody,
    }).then(response => response.json())
    .then(result => {
        if (result.status === 401) {
            onUserLoginExpire(store);
            return null;
        }
        return result;
    });
}

export const sendGetRequest = async (path = '') => {
    return fetch(`https://api.projectoi.fr/${path}`)
    .then(response => response.json())
    .then(result => {
        if (result.status === 401) {
            onUserLoginExpire(store);
            return null;
        }
        return result;
    });
}