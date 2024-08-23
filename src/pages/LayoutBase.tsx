import { Container, Text } from "@chakra-ui/react";
import { ProductForm } from "../components/ProductForm";

export function LayoutBase() {
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
      <ProductForm/>
    </Container>
    )    
};
