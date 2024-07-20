'use client'

import useSWR, { SWRConfiguration } from 'swr'

const fetcher = (...args:[key: any]) => fetch(...args).then(res => res.json())


export const useProducts = (url: string , config: SWRConfiguration = {}) => {

  const { data, error, isLoading } = useSWR(`http://localhost:8080/api/${url}`, fetcher , {});
  // const { data, error, isLoading } = useSWR(`http://localhost:8081/api/${ url }`, fetcher , {
  //   refreshInterval:1000
  // });


  return {
    products: data || {},
    isLoading: !error && !data,
    isError: error
  }

}

    
