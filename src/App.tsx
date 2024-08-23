import { useState } from "react";
import { ProductForm } from "./components/ProductForm";
import { ProductList } from "./components/ProductList";
import { Product } from "./models/Product";

import "./global.css";
import { Container, Text } from "@chakra-ui/react";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    
    <Container
      mt={"5rem"}
      maxW={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Container display={'flex'} justifyContent={'center'}>
        <Text
          fontWeight={"700"}
          fontSize={"28px"}
          textAlign={"center"}
          color={"#fff"}
        >
          Gerenciamento de <Text color="teal">estoque</Text>{" "}
        </Text>
      </Container>
      <ProductForm onAdd={addProduct} />
    </Container>
  );
}

export default App;
