'use client'

import { environment } from '@/env/env';
import '@/public/assets/css/login.css'
import { H1Icon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import LoginComponent from './login';
import { IconLogin2 } from '@tabler/icons-react';

type FormData = {
    username: string,
    password: string,
    full_name: string;
    movil: string;
    email: string;
    address: string;
}



export default function RegisterComponent() {

    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

    const onRegisterUser = async (user: FormData) => {

        console.log(user)

        try {
            setIsLoading(true);
            const { data } = await axios.post(`${environment.baseUrl}/users`, { ...user });
            setIsLoading(false);


        } catch (error) {
            setIsLoading(false);

            if (axios.isAxiosError(error)) {
                Swal.fire('Error', error.response?.data.data, 'error');
            }

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
                        Create new account for free.
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onRegisterUser)}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200  focus:ring-offset-green-700 sm:text-sm sm:leading-6 p-2"
                                    {...register('username',{
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
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type='email'
                                    className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200  focus:ring-offset-green-700 sm:text-sm sm:leading-6 p-2"
                                    {...register('email', {
                                        required: 'Este campo es requerido',
                                    })}
                                />
                                {
                                    errors.email
                                        ? <h5 className='text-red-500 pl-2'>{errors.email.message}</h5> : null
                                }
                            </div>
                        </div>


                        <div>
                            <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    placeholder='Opcional'
                                    id="full_name"
                                    className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200  focus:ring-offset-green-700 sm:text-sm sm:leading-6 p-2"
                                    {...register('full_name')}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="movil" className="block text-sm font-medium leading-6 text-gray-900">
                                Movil
                            </label>
                            <div className="mt-2">
                                <input
                                    id="movil"
                                    className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200  focus:ring-offset-green-700 sm:text-sm sm:leading-6 p-2"
                                    {...register('movil', {
                                        required: 'Este campo es requerido',

                                    })}
                                />
                                {
                                    errors.movil
                                        ? <h5 className='text-red-500 pl-2'>{errors.movil.message}</h5> : null
                                }
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-200  focus:ring-offset-green-700 sm:text-sm sm:leading-6 p-2"
                                    {...register('address', {
                                        required: 'Este campo es requerido',

                                    })}
                                />
                                {
                                    errors.address
                                        ? <h5 className='text-red-500 pl-2'>{errors.address.message}</h5> : null
                                }
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

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
                                disabled={isLoading}
                            >
                                {isLoading ? <p>Cargando...</p> : 
                                    <p
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px'
                                        }}
                                    >Nueva Cuenta
                                   <IconLogin2 stroke={2} />

                                    </p>}
                            </button>


                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Do you already have an account? {' '}
                        <a href={'/auth/login'} className="font-semibold leading-6 ">
                            Log in now!
                        </a>
                    </p>
                </div>
            </div>

        </>
    )
}