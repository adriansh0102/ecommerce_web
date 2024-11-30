import { User } from 'next-auth';
import { createContext } from 'react'

interface ContextProps {
    user:User;
    token: string;
    isLoggedIn: boolean;
  
    reviewToken: ( ) => void;
}

export const AuthContext = createContext( {} as ContextProps );