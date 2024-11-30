import { Category } from "@/app/home/category/interfaces/category.interface";
import { Product } from "@/app/home/products/interfaces/product.interface";



export interface ResultProductsGetAll {
    products: {
        message: string;
        status: number;
        success: boolean
        data: Product[];
    }
    isLoading: boolean;
    isError: any;
}

export interface ResultProductGetId {
    product: {
        message: string;
        status: number;
        success: boolean
        data: Product;
    }
    isLoading: boolean;
    isError: any;
}

export interface ResultCategoryGetAllMenu {
    categorys: {
        message: string;
        status: number;
        success: boolean
        data: Category[];
    }
    isLoading: boolean;
    isError: any;
}

export interface ResultCategoryGetAll {
    categorys: {
        message: string;
        status: number;
        success: boolean
        data: Category[];
    }
    isLoading: boolean;
    isError: any;
}