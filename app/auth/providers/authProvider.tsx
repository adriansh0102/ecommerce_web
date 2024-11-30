'use client'

import { FC, useEffect, useReducer } from 'react'
import { useSession } from "next-auth/react";
import Cookie from 'js-cookie'


import { environment } from '@/env/env'

import axios from 'axios';
import { User } from '../login.interface';
import { AuthContext } from '../authContexts';
import { authReducer } from '../reducers/authReducer';

interface Props {
    children?: React.ReactNode;
}

export interface AuthState {
    user: User;
    token: string;
    isLoggedIn: boolean;
}

const AUTH_INITIAL_STATE: AuthState = {
    user: {
        id:'',
        _id: '',
        full_name: '',
        username: '',
        password: '',
        role: '',
        movil: '',
        email: '',
        address: '',
        state: false,
        __v: 0
    },
    token: '',
    isLoggedIn: false,
}

export const AuthProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const { data, status } = useSession();

    useEffect(() => {
        console.log({user: data?.user})
        if (status === "authenticated") {
            // dispatch({
            //     type: '[ Authentication ] verify token', payload:
            //     {
            //         user: data?.user as User,
            //         token: '',
            //         isLoggedIn: true
            //     }
            // })
}
    }, [status, data])

useEffect(() => {
    reviewToken();
}, [state.token]);

const reviewToken = async () => {
    let token: string = '';

    try {
        token = Cookie.get('token') ?? '';

        if (token.length > 0) {

            axios.get(`${environment.baseUrl}/users/auth/tokenVerify`, {
                headers: {
                    token
                }
            })
                .then(response => {
                    dispatch({
                        type: '[ Authentication ] verify token',
                        payload: {
                            user: response.data.data.user,
                            token: response.data.data.token,
                            isLoggedIn: true
                        }
                    })
                })
                .catch(error => {
                    dispatch({
                        type: '[ Authentication ] verify token',
                        payload: {
                            user: state.user,
                            token: token,
                            isLoggedIn: false
                        }
                    })
                });
        }
        else {
            dispatch({
                type: '[ Authentication ] verify token',
                payload: {
                    user: state.user,
                    token: token,
                    isLoggedIn: false
                }
            })
        }

    } catch (error) {
        dispatch({
            type: '[ Authentication ] verify token',
            payload: {
                user: state.user,
                token: token,
                isLoggedIn: false
            }
        })
    }
}

return (
    <AuthContext.Provider value={{
        ...state,
        reviewToken,
    }}>
        {children}
    </AuthContext.Provider>
)
} 