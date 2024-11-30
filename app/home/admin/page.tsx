'use client'
import { GetServerSideProps } from "next";
import { FC } from "react";
import NextLink from "next/link";

import { useRouter } from 'next/navigation'
import { getServerSession, Session } from "next-auth";

export const Page = async (query: any) => {
  // const router = useRouter()
  const session = await getServerSession()
  return (
    <>
      {
        session?.user?.email
          ? <h1>{session?.user.email}</h1>
          : <h1>Nada de Nads</h1>
      }
      <h1>Bienvenido</h1>
      ]
    </>
  )
}

{/* <button type="button" onClick={() => router.push('/dashboard')}>
Dashboard
</button>
<h1>Admin Page</h1>
 {/* Navigate to /about?name=test */}
{/* <NextLink
  href={{
    pathname: '/home/products/3',
    query: quer,
  }}
> */}
//   About
// </NextLink>
// </> */}

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
