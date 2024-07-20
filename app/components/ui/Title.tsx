import { FC } from "react"

interface Props {
    title: string;
}

export const Title: FC<Props> = ({title}) => {
    return (
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 my-2">{title}</h1>
    )
}