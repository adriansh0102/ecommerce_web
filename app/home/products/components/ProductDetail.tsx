'use client'

import SuccessAlert from "@/app/components/alert/Success";
import { Loader } from "@/app/components/ui";
import { useGetIdProduct, useProducts } from "@/hooks";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { useContext, useState } from "react";

import ErrorServer from "@/public/pages/Error.server";
import NotElement from "@/public/pages/Not.element";
import { CartContext } from "../../cart/contexts/CartContext";
import { Cart } from "../../cart/interfaces";
import HomeLayout from '../../layout';


export const ProductDetailComponent = ({ params }: { params: { id: string } }) => {

  const { product, isLoading, isError } = useGetIdProduct(`products/${params.id}`);
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState(1);




  const { addProductToCart } = useContext( CartContext)


  const onAddProduct = () => {

    addProductToCart({ 
      productId: product.data._id,
      name: product.data.name,
      // image: product.data.image,
      image: 'cambiar imagen( muy larga)',
      price: product.data.price,
      quantity: amount,
      inStock: product.data.inStock.real
    });
  }
  return (
    <>
      {
        isError
          ? <ErrorServer />
          : isLoading
            ? <Loader />
            : product.status === 404 || product.status === 500
              ? <NotElement title="Not Element"/>
              : <div className="p-4 md:p-4 bg-background">


                

                <div className=" flex items-center justify-center">
                  <div className="flex flex-col md:flex-row bg-card p-6 rounded-lg shadow-md border border-border overflow-hidden">
                    <div className="flex-1">
                      <h1 className="text-2xl font-bold text-foreground mb-2">{product.data.name.toUpperCase()}</h1>
                      <div className="text-xl text-foreground mb-2">${product.data.price}</div>

                      <p className="text-muted-foreground mb-4">
                        {product.data.description}
                      </p>
                      {
                        product.data.inStock.real > 0
                          ? <div className="flex items-center mb-4">
                            <span className="text-green-600">●</span>
                            <span className="text-muted-foreground ml-2">
                              In stock and ready to ship
                            </span>
                          </div>
                          :
                          <div className="flex items-center mb-4">
                            <span className="text-red-600">●</span>
                            <span className="text-muted-foreground ml-2">
                              Out of stock
                            </span>
                          </div>
                      }
                      <div className="mb-4">
                        <h2 className="text-lg font-semibold text-foreground mb-2">Amount</h2>
                        <div className="flex space-x-4">
                          <button
                            onClick={() => {
                              if (amount != 1) {
                                setAmount(amount - 1)
                              }
                            }}
                            className="flex-1 border border-border p-1 rounded-lg text-foreground hover:bg-green-400">
                            <div className="text-lg font-semibold">-</div>
                          </button>
                          <button
                            className="flex-1 border border-border p-1 rounded-lg text-foreground">
                            <div className="text-lg font-semibold">{amount}</div>
                          </button>
                          <button
                            onClick={() => {
                              if (product.data.inStock.real > amount) {
                                setAmount(amount + 1)
                              }
                            }}
                            className="flex-1 border border-border p-4 rounded-lg text-foreground hover:bg-green-400">
                            <div className="text-lg font-semibold">+</div>
                          </button>
                        </div>
                      </div>
                      <button
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px"
                        }}
                        onClick={
                          () => {
                            setVisible(true);
                            setTimeout(() => {
                              setVisible(false);
                            }, 3000);

                            onAddProduct();

                          }
                        }
                        className="btn-primary w-full bg-primary text-primary-foreground p-4 rounded-lg hover:bg-primary/80 mb-4">Add to bag {<IconShoppingCartPlus stroke={2} />}</button>
                    </div>
                    <div className="flex-1 mt-6 md:mt-0 md:ml-6">
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                      }}>
                        <img
                          style={{
                            height: "450px",
                            width: "auto"
                          }}
                          src={product.data.image} alt="Everyday Ruck Snack" className="rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
               
                {
                  product.data.inStock.real > 0
                  ? visible && <SuccessAlert title={"Add Cart Success"} icon={true} />
                  : null
                }
              </div>
      }
    </>
  )
}


export default ProductDetailComponent;