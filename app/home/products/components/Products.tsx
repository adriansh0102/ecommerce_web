'use client'
import NextLink from "next/link";
import React, { useContext, useState } from "react";

import { useProducts } from "@/hooks";
import { Title } from "../../../components/ui/Title";
import { Loader } from "@/app/components/ui";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import SuccessAlert from "@/app/components/alert/Success";
import ErrorServer from "@/public/pages/Error.server";
import NotElement from "@/public/pages/Not.element";
import { CartContext } from "../../cart/contexts/CartContext";
import { Cart } from "../../cart/interfaces";


export const ProductsComponent = () => {
  
  const { addProductToCart } = useContext( CartContext)
  const { products, isLoading, isError } = useProducts(`/products`);
  const [visible, setVisible] = useState(false);
 
  const onAddProduct = (product: Cart) => addProductToCart(product);
  
  return (
    <>
      {
        isError
          ? <ErrorServer />
          : isLoading
            ? <Loader />
            : products.status === 404 || products.status === 500
                ?<NotElement title="Not Element"/>
                : <div>
              <Title title="All Products"></Title>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                  products.data.map(product => (
                    <div key={product._id} className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
                      <NextLink href={`/home/products/${product._id}`} passHref prefetch={false}>
                        <img
                          style={{
                            height: "250px",
                            width: "auto"
                          }}
                          src={product.image} alt={`${product.name} (image)`} className="w-full" />
                      </NextLink>
                      <div className="p-4">
                        <h2 className="text-lg font-semibold">{product.name.toUpperCase()}</h2>
                        <p className="text-muted-foreground">{product.category.name}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-lg font-bold">${product.price}</span>
                          <button
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              gap: "10px"
                            }}
                            className="btn-primary bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md"
                            onClick={
                              () => {
                                setVisible(true);
                                setTimeout(() => {
                                  setVisible(false);
                                }, 3000);
                                onAddProduct({ 
                                  productId: product._id,
                                  name: product.name,
                                  // image: product.data.image,
                                  image: 'cambiar imagen( muy larga)',
                                  price: product.price,
                                  quantity: 1,
                                  inStock: product.inStock.real
                                })                              
                              }
                            }>Add{<IconShoppingCartPlus stroke={2} />}</button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              {
                visible && <SuccessAlert title={"Add Cart Success"} icon={true} />
              }
            </div>
      }
    </>
  );

}