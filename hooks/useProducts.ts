'use client'

import useSWR, { SWRConfiguration } from 'swr'
import { ResultProductGetId, ResultProductsGetAll } from './interfaces/response.interface';
import { environment } from '@/env/env';

const local = environment.localUrl;

const fetcher = (...args:[key: any]) => fetch(...args).then(res => res.json())


export const useProducts = (url: string , config: SWRConfiguration = {}): ResultProductsGetAll => {

  const { data, error, isLoading } = useSWR(`${local}${url}`, fetcher , {});
  // const { data, error, isLoading } = useSWR(`http://localhost:8081/api/${ url }`, fetcher , {
  //   refreshInterval:1000
  // });


  return {
    products: data || {},
    isLoading: !error && !data,
    isError: error
  }

}
export const useGetIdProduct = (url: string , config: SWRConfiguration = {}): ResultProductGetId => {

  const { data, error, isLoading } = useSWR(`${local}${url}`, fetcher , {});
 
  return {
    product: data || {},
    isLoading: !error && !data,
    isError: error
  }

}

    
