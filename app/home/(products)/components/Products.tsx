'use client'
import NextLink from "next/link";
import React, { useState } from "react";

import { Title } from "../../../components/ui/Title";
import { Product } from '../interfaces/product.interface';
import { useProducts } from "@/hooks";
import useSWR from 'swr'
import Swal from "sweetalert2";
import { Loader } from "@/app/components/ui";


// reactstrap components
import { Alert } from "reactstrap";
import SweetAlert2 from "react-sweetalert2";

export const ProductsComponent = () => {

  const productsall: Product[] = [
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "1"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "2"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "3"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "4"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "5"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "6"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "7"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "8"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "9"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "10"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "11"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "12d2"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "12"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "13"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "14"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "15"
    },
    {
      title: 'Vodka',
      category: 'Rones',
      price: 6.45,
      image: '../assets/img/images.jpeg',
      id: "16"
    },
  ]
  const { products, isLoading, isError } = useProducts(`/users`);

  const [swalProps, setSwalProps] = useState({});
  
  return (
    <>
    
      {
        isLoading
          ? <Loader />
          : <div>
            <Title title="All Products"></Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {
                productsall.map(product => (
                  <div key={product.id} className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden">
                    <NextLink href={`/home/productDetail`} passHref prefetch={false}>
                      <img src={product.image} alt={`${product.title} image`} className="w-full" />
                    </NextLink>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold">{product.title}</h2>
                      <p className="text-muted-foreground">{product.category}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-bold">${product.price}</span>
                        <button className="btn-primary bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md">Add al carrito</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      }

  
    </>
  );

}