'use client'

import useSWR, { SWRConfiguration } from 'swr'
import { ResultCategoryGetAll, ResultCategoryGetAllMenu } from './interfaces/response.interface';
import { environment } from '@/env/env';

const local = environment.baseUrl;

const fetcher = (...args: [key: any]) => fetch(...args).then(res => res.json());


export const useCategoryMenu = (url: string, config: SWRConfiguration = {}): ResultCategoryGetAllMenu => {

  const { data, error, isLoading } = useSWR(`${local}/${url}`, fetcher, {});

  return {
    categorys: data || {},
    isLoading: !error && !data,
    isError: error
  }

}

export const useCategoryGetAll = (config: SWRConfiguration = {}): ResultCategoryGetAll => {

  const { data, error, isLoading } = useSWR(`${local}/category`, fetcher, {});


  return {
    categorys: data || {},
    isLoading: !error && !data,
    isError: error
  }

}