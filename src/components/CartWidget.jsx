import React from 'react'
import { Tag } from '@chakra-ui/react'
import { CiShoppingCart } from 'react-icons/ci';

const CartWidget = () => {
  return (
    <div>
        <CiShoppingCart size={30}/>
        <span>
          <Tag></Tag>
        </span>
    </div>
  )
}

export default CartWidget