import React from 'react'
import { useState, useContext } from "react"
import { CartContext } from "../context/ShoppingCartProvider";
import { Box, Flex, Button, ButtonGroup, Tooltip, IconButton, Center } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const ItemCount2 = () => {
    const {cart, setCart} = useContext(CartContext)
    const [count, setCount] = useState(1)
    
    const sumarProd = () => {
      setCount(count + 1)
    }

    const restarProd = () => {
      setCount(count - 1)
    }

    const agregarCarrito = () => {
      setCart((cart) => {
        const itemExiste = cart.find((item) => item.id === id)

        if (itemExiste) {
          return cart.map((item) => {
            if (item.id === id){
              return {...item, quantity: item.quantity + count}
            } else {
              return item;
            }
          });
        } else {
          return [...cart, {id, quantity: count, price, title}]
        }

      })
    }

  return (
    <>
      <ButtonGroup size='sm' isAttached variant='outline'>
        {count < 1 ? (
        <Tooltip label='minimum stock reached' placement='bottom'>
          <IconButton icon={<MinusIcon/>} isDisabled/>
        </Tooltip>
        ) : (
        <IconButton icon={<MinusIcon/>} onClick={restarProd} />
        )}

        <Center>
          <Button
          onClick={() => agregarCarrito()}
          variant='solid'
          >
            Agregar al Carrito: {count}
          </Button>
        </Center>

        {count < stock ? (
        <IconButton icon={<AddIcon/>} onClick={sumarProd} />
        ) : (
        <Tooltip label='stock limit reached' placement='bottom'>
          <IconButton icon={<AddIcon/>} isDisabled/>
        </Tooltip>
        )}

      </ButtonGroup>
    </>
  )
}

export default ItemCount2