import { Container } from "@chakra-ui/react";
import { ProductList } from "../components/ProductList";
import { Product } from '../models/Product';
import { useState } from "react";



export function LayoutList() {
    const [products, setProducts] = useState<Product[]>([]);
    
    const handleDelete = (id: number) => {
        setProducts(products.filter(product => product.id !== id));
    };

  return (
    <Container
      mt={"5rem"}
      maxW={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Container display={"flex"} justifyContent={"center"}>
       
      </Container>
      <ProductList products={products} onDelete={handleDelete}/>
    </Container>
  );
}
