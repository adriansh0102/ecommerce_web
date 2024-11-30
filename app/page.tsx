
'use client'
import { SessionProvider } from 'next-auth/react';
import CategoryComponent from './home/category/components/Category';
import HomeLayout from "./home/layout";
import { AuthProvider } from "@/app/api/auth/providers/authProvider";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log(children)
  return (

      <HomeLayout title={"Ecommerce"} pageDescription={"all category"}/>
 

  )
}