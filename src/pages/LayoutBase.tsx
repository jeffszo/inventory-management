import { Container, Text } from "@chakra-ui/react";
import { ProductForm } from "../components/ProductForm";
import { CgShutterstock } from "react-icons/cg";

export function LayoutBase() {
  return (
    <Container
      mt={"7rem"}
      maxW={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Container
        maxW={'100%'}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={'0.3rem'}
        
      >
        <CgShutterstock color="teal" size={35} />
        <Text
          maxW={'100%'}
          fontWeight={"700"}
          fontSize={"32px"}
          color={"#fff"}
        >
            Stock
        </Text>
      </Container>
      <ProductForm />
    </Container>
  );
}
