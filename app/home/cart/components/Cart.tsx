'use client'
import { FC, useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';

import { CartContext } from '../contexts/CartContext';

import { Loader } from '@/app/components/ui';
import NotElement from '@/public/pages/Not.element';
import { Cart } from '../interfaces';
import { environment } from '@/env/env';
import { AuthContext } from '@/api/auth/contexts/authContexts';


export default function CartComponent() {
    const { addProductToCart, deleteProductToCart } = useContext(CartContext);
    const { isLoggedIn } = useContext(AuthContext);


    const { cart  , numberOfItem , subTotal, total , tax} = useContext(CartContext)
    const [state, setState] = useState(true);

    setTimeout(() => {
        setState(false);
    }, 1500);

    const ondeleteProduct = (id: string) => deleteProductToCart(id);
    const onAddProduct = (product: Cart, quantity: number ) => addProductToCart({...product, quantity});
    
    return (
        <>
            {
                state && cart.length === 0
                    ? <Loader />
                    : cart.length === 0
                        ? <NotElement title={'Not Element in the Cart'} />
                        : <div>
                            <div className="max-w-4xl mx-auto px-4 py-8 border rounded-lg border-primary">
                                <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
                                <hr />
                                {
                                    cart.map(item => (
                                        <div key={item.productId} className="bg-card text-card-foreground p-4 rounded-lg flex items-center mb-4">
                                            <NextLink href={`/home/products/${item.productId}`} >
                                                <img src="https://placehold.co/100" alt="Product Image" className="w-16 h-16 object-cover rounded-lg mr-4" />
                                            </NextLink>
                                            <div className="flex-1">
                                                <h2 className="text-lg font-bold">{item.name}</h2>
                                                <p className="text-sm font-bold">${item.price}</p>
                                            </div>
                                            <div>
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={() => onAddProduct(item , -1 ) }
                                                    className="bg-secondary text-secondary-foreground px-3 py-1 mr-2 border rounded-lg border-primary hover:bg-green-300">-</button>
                                                <span className="text-lg font-bold rounded-lg border-primary" >{item.quantity}</span>
                                                <button
                                                    onClick={() => onAddProduct(item , 1)}
                                                    className="bg-primary text-primary-foreground px-3 py-1 ml-2 border rounded-lg border-primary hover:bg-green-300">+</button>
                                            </div>
                                            <button
                                                onClick={() => ondeleteProduct(item.productId)}
                                                className="bg-destructive text-destructive-foreground px-2 py-2 rounded-md ml-4 hover:text-red-500">Remove</button>
                                            </div>
                                        </div>
                                    ))
                                }
                                <hr />
                                <div className="bg-card text-card-foreground p-1 rounded-lg flex justify-between items-center ">
                                    <p className="text-lg">SubTotal:</p>
                                    <p className="text-lg">${subTotal}</p>
                                </div>
                                <div className="bg-card text-card-foreground p-1 rounded-lg flex justify-between items-center ">
                                    <p className="text-lg">Impuestos:</p>
                                    <p className="text-lg ">${tax} ({environment.tax*100}%)</p>
                                </div>
                                <div className="bg-card text-card-foreground p-1 rounded-lg flex justify-between items-center ">
                                    <p className="text-lg">Total:</p>
                                    <p className="text-lg font-bold">${total}</p>
                                </div>
                                <button className="btn-primary text-primary-foreground w-full py-2 mt-4 rounded-lg hover:bg-primary/80"
                                >Place your order now !</button>
                                <div
                                    style={{
                                        color: 'rgba(0, 214, 89, 1)'
                                    }}
                                    className="flex justify-center py-2">
                                    <a href={'/home/productss'} className="text-sm font-semibold leading-6 text-green-500 hover:text-green-700">
                                    Continue Shopping <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
            }

        </>
    )
}