import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from "react-router-dom";

import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Container, Center, Flex} from '@chakra-ui/react'


const ItemDetail = ({productos}) => {
    const { id } = useParams();
    console.log(id);
    const productosFiltro = productos.filter((producto) => producto.id == id);

  return (
    <>
    {productosFiltro.map((producto) => (
        <div key={producto.id}>
            <Flex m={"10vh"}>
                <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '40vh' }}
                src={producto.image}
                alt={producto.title}
            />

            <Stack m={5}>
                <CardBody>
                <Heading size='lg'>{producto.title}</Heading>

                <Text py='10'>
                {producto.description}
                </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                    Comprar
                </Button>
                </CardFooter>
                
                <ItemCount/>
            </Stack>

            
            </Card>
            </Flex>
            
        </div>
    )
        
    )}
    </>
  )
};

export default ItemDetail