export type ProductType = 'Físico' | 'Digital';

export interface Product {
    id: number;
    name: string;
    price: string;
    quantity: number;
    type: ProductType;
}

