
import { FC } from "react";
import { metadata } from "../layout";


interface Props {
    children?: React.ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const AuthLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {

    metadata.title = title
    metadata.description = pageDescription

    return (
        <>
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

export default AuthLayout;