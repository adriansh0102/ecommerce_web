'use client'

import useSWR, { SWRConfiguration } from 'swr'
import { ResultCategoryGetAllMenu, ResultProductGetId, ResultProductsGetAll } from './interfaces/response.interface';
import { environment } from '@/env/env';

const local = environment.localUrl;

const fetcher = (...args:[key: any]) => fetch(...args).then(res => res.json());


export const useCategoryMenu = (url: string , config: SWRConfiguration = {}): ResultCategoryGetAllMenu => {

    const { data, error, isLoading } = useSWR(`${local}${url}`, fetcher , {});
    // const { data, error, isLoading } = useSWR(`http://localhost:8081/api/${ url }`, fetcher , {
    //   refreshInterval:1000
    // });
  
  
    return {
      categorys: data || {},
      isLoading: !error && !data,
      isError: error
    }
  
  }