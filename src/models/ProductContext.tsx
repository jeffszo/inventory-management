import { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../models/Product';

interface ProductContextType {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (id: number) => void; 
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
        setProducts(prevProducts => [...prevProducts, product]);
    };

    const removeProduct = (id: number) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
