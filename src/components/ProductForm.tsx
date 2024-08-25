// components/ProductForm.tsx
import React, { useState } from 'react';
import {
    Button, Container, Input, NumberInput, Text, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, NumberInputField, Select
} from '@chakra-ui/react';
import { Product, ProductType } from '../models/Product';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../models/ProductContext';

const productTypes: ProductType[] = ['Físico', 'Digital']; // Array of ProductType

export function ProductForm() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState('1.00');
    const [productType, setProductType] = useState<ProductType>('Físico'); // Default value
    const { addProduct } = useProductContext();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (name && quantity > 0 && productType) {
            const newProduct: Product = {
                id: Date.now(),
                name,
                quantity,
                price,
                type: productType,
            };
            addProduct(newProduct);
            setName('');
            setQuantity(0);
            setPrice('1.00');
            setProductType('Físico'); // Reset to default
            onOpen(); // Open success modal
        }
    };

    const goToLayoutList = () => {
        navigate('/listagem');
    };

    return (
        <Container mt={'1rem'} display={'flex'} flexDirection={'column'} gap={'0.5rem'} color={'#fff'}>
            <form onSubmit={handleSubmit}>
                <Text mb={'0.2rem'} fontWeight={'600'}>Nome:</Text>
                <Input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    focusBorderColor='teal.400'
                    border={'1px solid #6c757d'}
                    required
                    placeholder='ex: pneu, borracha...'
                    mt={'0.2rem'}
                />
                <Text mb={'0.2rem'} fontWeight={'600'} mt={'2rem'}>Quantidade:</Text>
                <NumberInput
                    max={50}
                    value={quantity}
                    onChange={(valueString) => setQuantity(parseInt(valueString, 10))}
                >
                    <NumberInputField border={'1px solid #6c757d'} />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Text mb={'0.2rem'} fontWeight={'600'} mt={'2rem'}>Preço unitário:</Text>
                <NumberInput
                    value={price}
                    onChange={(valueString) => setPrice(valueString)}
                    precision={2} // Ensure two decimal places
                    step={0.01}
                >
                    <NumberInputField border={'1px solid #6c757d'} />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Text mb={'0.2rem'} fontWeight={'600'} mt={'2rem'}>Tipo de produto:</Text>
                <Select
                    
                    value={productType}
                    focusBorderColor='teal.400'
                    required
                    border={'1px solid #6c757d'}
                    mt={'0.2rem'}
                    sx={{
                        'option': {
                            backgroundColor: '#05111a',
                            color: '#333'

                        }
                    }}
                    onChange={(e) => setProductType(e.target.value)}
                >
                    {productTypes.map(type => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </Select>

  
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
