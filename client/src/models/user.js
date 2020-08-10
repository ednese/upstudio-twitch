import { getCookie } from '../helpers/cookies'

export const UserModel = {
    email: null,
    isLogged: getCookie('isLogged') == 'true',
};