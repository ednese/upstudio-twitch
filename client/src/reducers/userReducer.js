//Models
import { UserModel } from '../models/user';

const initialState = {
    ...UserModel
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN_SUCCESS": {
            return {
                ...state,
                email: action.email,
                isLogged: action.isLogged
            }
        }
        case "USER_LOGIN_EXPIRE": {
            return {
                ...state,
                email: action.email,
                isLogged: action.isLogged
            }
        }
        default: {
            return state;
        }
    }
}