import { FC } from "react"
import NextLink from 'next/link';

interface Props {
    title: string;
}
export const NotElement: FC<Props> = ({title}) => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
        <h4 className="text-2xl font-semibold text-black mt-4">{title}</h4>
        <NextLink
        style={{
          marginTop: "20px",
        }}
        href={`/home/products`} passHref prefetch={false}>
        <button
          type="button"
          className="font-medium text-green-500 hover:text-green-600"
        >
          Continue Shopping
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </NextLink>
      </div>
    )
  }

  export default NotElement;