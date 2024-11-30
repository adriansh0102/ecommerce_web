'use client'

import { FC, useEffect, useReducer } from 'react'

import Cookie from 'js-cookie'

import { CartContext } from '../contexts/CartContext'
import { cartReducer } from '../reducers/cartReducer'
import { Cart } from '../interfaces'
import { environment } from '@/env/env'

interface Props {
    children?: React.ReactNode;
}

export interface CartState {
    cart: Cart[];
    numberOfItem: number;
    subTotal: number;
    tax: number;
    total: number;
}

const CART_INITIAL_STATE: CartState = {
    cart: [],
    numberOfItem: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
}

export const CartProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
    let cookieProduct: Cart[] = [] ;

    try {
        cookieProduct = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')! ?? []) : [];
    } catch (error) {
        console.log('Alguien a manipulado su Carrito de compras')
    }

    useEffect(() => {
        dispatch({
            type: '[Cart] - LoadCart from cookies | storage',
            payload: [...cookieProduct]
        });
    }, []);

    useEffect(() => {
        Cookie.set('cart', JSON.stringify(state.cart))
    }, [state.cart]);

    useEffect(() => {
        // const numberOfItem = state.cart.reduce( (prev, current) => current.quantity + prev, 0); //para la cantidad de cada elemento
        const numberOfItem = state.cart.length;

        const subTotal = state.cart.reduce( (prev, current) => (current.quantity * current.price )+ prev, 0);
        const tax = subTotal * environment.tax;

        const orderSumary = {
            numberOfItem,
            subTotal,
            tax,
            total: tax + subTotal
        }
        dispatch({
            type: '[Cart] - Update order',
            payload: orderSumary
        });

    }, [state.cart]);

    const addProductToCart = (product: Cart) => {


        if (!state.cart.some(p => p.productId === product.productId))
            return dispatch({
                type: '[Cart] - Update product in cart',
                payload: [...state.cart, product]
            });

        const update = state.cart.map(p => {

            if (p.productId !== product.productId) return p;
            if (p.inStock <= p.quantity && product.quantity === 1) return p;
            if (p.quantity === 1 && product.quantity === -1) return p;
            
            p.quantity += product.quantity;

            if ( p.inStock < p.quantity){
                p.quantity = p.inStock;
                return p;
            }
            return p;
        });

        dispatch({
            type: '[Cart] - Update product in cart',
            payload: update
        });
    }

    const deleteProductToCart = (productId: string) => {
        dispatch({
            type: '[Cart] - Update product in cart',
            payload: state.cart.filter(p => p.productId !== productId)
        });
    }

    return (
        <CartContext.Provider value={{
            ...state,
            addProductToCart,
            deleteProductToCart
        }}>
            {children}
        </CartContext.Provider>
    )
} 