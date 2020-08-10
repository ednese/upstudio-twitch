import { setCookie } from '../../helpers/cookies'

export const userLoginSuccessAC = email => {
    setCookie('isLogged', true, 1);

    return {
        type: 'USER_LOGIN_SUCCESS',
        email,
        isLogged: true,
    }
};

export const userLoginExpireAC = () => {
    setCookie('isLogged', false, 1);

    return {
        type: 'USER_LOGIN_EXPIRE',
        email: null,
        isLogged: false
    }
};

export const onUserLoginExpire = store => {
    store.dispatch(userLoginExpireAC());
}