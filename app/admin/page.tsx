'use client'
import { GetServerSideProps } from "next";
import { FC } from "react";
import NextLink from "next/link";

import { useRouter } from 'next/navigation'

const quer = {
  name: 'test' ,
  apellido: 'testApellido' ,
  namee: 'test' ,
  apelelido: 'testApellido' ,
  nameed: 'test' ,
}


export const Page= ( query: any) => {
  const router = useRouter()

console.log(query.searchParams)
  return (
   <>
   <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
    <h1>Admin Page</h1>
       {/* Navigate to /about?name=test */}
      <NextLink
        href={{
          pathname: '/home/products/3',
          query: quer,
        }}
      >
        About
      </NextLink>
   </>
  )
}



// export const getServerSideProps: GetServerSideProps = async (ctx) => {
// // your fetch function here 

// console.log(ctx)

//   return {
//     props: {
//       theme: 'holaaTheme'
//     }
//   }
// }




export default Page;
