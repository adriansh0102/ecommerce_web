import { createContext } from 'react'
import { Cart } from '../interfaces';

interface ContextProps {
    cart: Cart [];
    numberOfItem: number;
    subTotal: number;
    tax: number;
    total: number;


    addProductToCart: ( product:  Cart ) => void;
    deleteProductToCart: ( productId: string ) => void;
}

export const CartContext = createContext( {} as ContextProps );










