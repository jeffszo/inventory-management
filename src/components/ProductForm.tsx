// ProductForm.jsx
import React, { useState } from 'react';
import {
    Button, Container, Input, NumberInput, Text, Textarea, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, NumberInputField
} from '@chakra-ui/react';
import { Product } from '../models/Product';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../models/ProductContext';

export function ProductForm() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState('1.53');
    const [description, setDescription] = useState('');
    const { addProduct } = useProductContext();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (name && quantity > 0 && description) {
            const newProduct: Product = {
                id: Date.now(),
                name,
                quantity,
                price,
                description,
            };
            addProduct(newProduct);
            setName('');
            setQuantity(0);
            setPrice('1.53');
            setDescription('');
            onOpen(); // Open success modal
        }
    };

    const goToLayoutList = () => {
        navigate('/listagem');
    };

    return (
        <Container mt={'1rem'} display={'flex'} flexDirection={'column'} gap={'0.5rem'} color={'#fff'}>
            <form onSubmit={handleSubmit}>
                <Text fontWeight={'600'}>Nome:</Text>
                <Input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    focusBorderColor='teal.400'
                    required
                    mt={'0.2rem'}
                />
                <Text fontWeight={'600'} mt={'2rem'}>Quantidade:</Text>
                <NumberInput
                    max={50}
                    value={quantity}
                    onChange={(valueString) => setQuantity(parseInt(valueString, 10))}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Text fontWeight={'600'} mt={'2rem'}>Preço:</Text>
                <NumberInput
                    max={5000}
                    value={price}
                    onChange={(valueString) => setPrice(valueString)}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Text fontWeight={'600'} mt={'2rem'}>Descrição do produto:</Text>
                <Textarea
                    value={description}
                    focusBorderColor='teal.400'
                    required
                    mt={'0.2rem'}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Container maxW={'100%'} display={'flex'} justifyContent={'center'}>
                    <Button colorScheme='teal' variant='outline' mt={'2rem'} type='submit'>Adicionar</Button>
                    <Button
                        colorScheme='teal'
                        variant='solid'
                        mt={'2rem'}
                        ml={'2rem'}
                        onClick={goToLayoutList}
                    >
                        Listagem
                    </Button>
                </Container>
            </form>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent bg='blue.100'>
                    <ModalHeader display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                        Produto adicionado <FiShoppingCart />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        O produto foi adicionado com sucesso!
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='teal' onClick={onClose}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
}
