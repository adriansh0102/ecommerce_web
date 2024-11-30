'use client'

import '@/public/assets/css/login.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { environment } from '@/env/env';
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import { IconLogin2 } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { useSearchParams } from 'next/navigation';

type FormData = {
  username: string,
  password: string,
}

export default function LoginComponent() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const searchParams = useSearchParams();
  const page = searchParams?.get('page');

  if( !page ){
    // redireccionar para el home 
  }
  else{
    // redireccionar para page
  }
  const onLoginUser = async ({ username, password }: FormData) => {


   

    try {
      // const { data } = await axios.post(`${environment.baseUrl}/users/auth/sign`, { username, password });

      // const { user, token } = data.data;

      // const userData = {
      //   username: user.username,
      //   email: user.email,
      //   rol: user.rol,
      // }

      // Cookies.set('user', JSON.stringify(userData));
      // Cookies.set('token', token);    

      signIn('credentials', { username , password })


    } catch (error) {

      if (axios.isAxiosError(error)) Swal.fire('Error', 'Credenciales Incorrectas', 'error');

      // if ( axios.isAxiosError(error)) {
      //   console.log(error.response?.data);
      // }
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onLoginUser)}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200  focus:ring-offset-green-700 sm:text-sm sm:leading-6 p-2"
                  {...register('username', {
                    required: 'Este campo es requerido',

                  })}
                />
                {
                  errors.username
                    ? <h5 className='text-red-500 pl-2'>{errors.username.message}</h5> : null
                }
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold ">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200  focus:ring-offset-green-700 sm:text-sm sm:leading-6 p-2"
                  {...register('password', {
                    required: 'Este campo es requerido',
                    minLength: { value: 6, message: 'Minimo 6 caracteres' }
                  })}
                />
                {
                  errors.password
                    ? <h5 className='text-red-500 pl-2'>{errors.password.message}</h5> : null
                }
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 mt-5 text-sm font-semibold leading-6  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
                <IconLogin2 stroke={2} />
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{'  '}
            <a  href={'/auth/register'} className="font-semibold leading-6 ">
              Register for free
            </a>
          </p>
        </div>
      </div>

    </>
  )
}


export async function getServerSideProps(){
//   const session = await getServerSession(req);
  
// console.log('cgmghmcgfmhn');

//   if (session) {
//    return {
//     redirect: {
//       destination: '/',
//       permanent: false
//     }
//    }
//   } else {
//     return {
//       props:{ }
//     }
  // }

console.log('aaaaaaaaaaaaa')

return {
  props:{}
}
  
}