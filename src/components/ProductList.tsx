import { useState } from 'react';
import {
    Container, ListItem, List, Text, Button, Modal, ModalOverlay, ModalContent,
    ModalCloseButton, ModalBody, ModalFooter, ModalHeader, useDisclosure
} from "@chakra-ui/react";
import { useProductContext } from "../models/ProductContext";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

export function ProductList() {
    const { products, removeProduct } = useProductContext();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [productToDelete, setProductToDelete] = useState<number | null>(null);

    const handleDeleteClick = (id: number) => {
        setProductToDelete(id);
        onOpen();
    };

    const confirmDelete = () => {
        if (productToDelete !== null) {
            removeProduct(productToDelete);
            setProductToDelete(null);
            onClose();
        }
    };

    return (
        <Container maxW={"100%"} color={"#fff"}>
            <Text textAlign={"center"} fontWeight={"700"} fontSize={"1.7rem"}>
                Lista de produtos
            </Text>
            <Container
                display={"flex"}
                justifyContent={"center"}
                maxW={"100%"}
                mt={"2rem"}
            >
                <List display={"flex"} flexDirection={"column"} gap={"1rem"} maxWidth={'100%'}>
                    {products.map((product) => (
                        <ListItem
                            border={'1px solid gray'}
                            padding={"1rem"}
                            gap={"0.5rem"}
                            borderRadius={"0.5rem"}
                            bg={"#05111a"}
                            maxW={"100%"}
                            display={"flex"}
                            width={'100%'}
                            key={product.id}
                            alignItems={"center"}
                        >
                            <RiShoppingCartLine color={'gray'} size={25} />
                            <Text color={'gray'} fontWeight={'600'}>Nome: {product.name}</Text>
                            <Text color={'gray'} fontWeight={'600'}> | Quantidade: {product.quantity}</Text>
                            <Text color={'gray'} fontWeight={'600'}> | Preço: ${product.price}</Text>
                            <Text color={'gray'} fontWeight={'600'}> | Descrição: {product.description}</Text>
                            <Button
                                rightIcon={<MdDelete />}
                                colorScheme="teal"
                                variant={'outline'}
                                onClick={() => handleDeleteClick(product.id)}
                                ml={4}
                            >
                                Remover
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Container>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent bg='red.200'>
                    <ModalHeader display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                        <Text fontWeight={'600'} color={'black'}>Produto</Text> <FiShoppingCart />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Text fontWeight={'600'} color={'black'}>Deseja remover o produto?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' onClick={confirmDelete}>Confirmar</Button>
                        <Button colorScheme='gray' onClick={onClose} ml={3}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
}
