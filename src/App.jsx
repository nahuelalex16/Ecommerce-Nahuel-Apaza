import * as React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from './components/Cart'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/carrito" element={<Cart/>}/>
        <Route exact path="/catalogo" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      
    </>
  )
}

export default App
