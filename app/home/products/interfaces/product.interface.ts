export interface Product {
    _id: string;
    name: string;
    description: string;
    category: {
        _id: string;
        name: string;
        description: string;
    };
    price: number;
    inStock: {
        real: number;
        pending: number;
    }
    state: boolean;
    image: string;
}