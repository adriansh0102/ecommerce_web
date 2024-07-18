
import { FC } from "react";
import Navbar from "../components/header/Navbar";
import type { Metadata } from "next";



interface Props {
    children?: React.ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const metadata: Metadata = {
    title: "Ecommerce",
    description: "Sale of products",
  };

export const HomeLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {

    metadata.title = title
    metadata.description = pageDescription

    return (
        <>
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
        </>
    )
}

export default HomeLayout