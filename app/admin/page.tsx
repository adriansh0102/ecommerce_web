'use client'
import { GetServerSideProps } from "next";
import { FC } from "react";
import NextLink from "next/link";


export const Page= ( query: any) => {

console.log(query.searchParams)
  return (
   <>
    <h1>Admin Page</h1>
       {/* Navigate to /about?name=test */}
      <NextLink
        href={{
          pathname: '/admin',
          query: {
            name: 'test',
            apellido: 'testApellido',
          },
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
