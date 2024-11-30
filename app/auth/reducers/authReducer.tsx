import { User } from "../login.interface";
import { AuthState } from "../../api/auth/providers/authProvider";

type AuthActionType =
    {
        type: '[ Authentication ] verify token', payload: {
            user: User;
            token: string;
            isLoggedIn: boolean;
        }
    }


export const authReducer = (state: AuthState, action: AuthActionType): AuthState => {
    switch (action.type) {
        case '[ Authentication ] verify token':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}