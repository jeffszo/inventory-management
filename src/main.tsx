import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ProductProvider } from "./models/ProductContext";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <ProductProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </ProductProvider>
  </ChakraProvider>
);
