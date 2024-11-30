import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { userAuth } from "../userAuth"

const handler = NextAuth({

  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials, req) {
        const user = await userAuth(credentials?.username, credentials?.password);
  
        if (user) {
          return user.user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),


   
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    
  ],
  callbacks: {
      
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true
    // },
    // async redirect({ url, baseUrl }) {
    //   return 'http://localhost:3000/home/category/669bcc71ea61fa22e2d786c4'
    // },
   
    async jwt({ token, user, account, profile }) {

      if ( account ) {        
        switch ( account.type ) {
          case 'oauth':
            // token.scope = account.scope;
            break;
          case 'credentials':
            token.user = user;
            break;
        }
       }

      return token
    } ,
    async session({ session, user, token }) {

      // session.user.id = user.id; // Asumiendo que el id está disponible en el objeto de usuario
      // session.user.role = user.role;
      
      
      // session.user = token.user as any ;
      console.log({session});
      
      return session;
    },
  },
})

export { handler as GET, handler as POST }