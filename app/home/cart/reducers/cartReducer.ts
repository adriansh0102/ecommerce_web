

import { CartState } from '../providers/CartProvider';
import { Cart } from '../interfaces';


type CartActionType =
    | { type: '[Cart] - LoadCart from cookies | storage', payload: Cart[] }
    | { type: '[Cart] - Update product in cart', payload: Cart[] }
    | { type: '[Cart] - Delete product in cart', payload: Cart[] }
    | {
        type: '[Cart] - Update order', payload: {
            numberOfItem: number;
            subTotal: number;
            tax: number;
            total: number;
        }
    }


export const cartReducer = (state: CartState, action: CartActionType): CartState => {
    switch (action.type) {
        case '[Cart] - LoadCart from cookies | storage':
            return {
                ...state,
                cart: action.payload
            }

        case '[Cart] - Update product in cart':
            return {
                ...state,
                cart: [...action.payload]
            }

        case '[Cart] - Delete product in cart':
            return {
                ...state,
                cart: [...action.payload]
            }
        case '[Cart] - Update order':
            return {
                ...state,
                ...action.payload

            }

        default:
            return state;
    }
}