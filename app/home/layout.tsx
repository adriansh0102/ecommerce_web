'use client'
import { FC, useContext } from "react";
import Navbar from "../components/header/Navbar";
import type { Metadata } from "next";
import { CartProvider } from "./cart/providers/CartProvider";
import { AuthProvider } from "@/app/api/auth/providers/authProvider";
import { SessionProvider } from "next-auth/react";


interface Props {
    children?: React.ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}



export const HomeLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {

  
    return (
<SessionProvider>
        <AuthProvider>
            <CartProvider>
                {/* <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                
                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
            </Head> */}

                <nav>
                    <Navbar />
                </nav>


                <main style={{
                    margin: "8px auto",
                    maxWidth: "1440px",
                    padding: "0 30px"
                }}>
                    {children}
                </main>
            </CartProvider>
        </AuthProvider>
        </SessionProvider>
    )
}

export default HomeLayout