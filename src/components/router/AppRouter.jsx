import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../layout/navbar/Navbar'
import Footer from '../layout/footer/Footer'
import ItemListContainer from '../pages/itemListContainer/ItemListContainer'
import ItemDetailContainer from '../pages/itemDetailContainer/ItemDetailContainer'
import Cart from '../pages/cart/Cart'

import CheckoutOficial from '../pages/checkoutOficial/CheckoutOficial'


const AppRouter = () => {
  return (
    <Routes>
    <Route element={<Navbar/>}>
      <Route element={<Footer />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/category/:categoryName"
          element={<ItemListContainer />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Checkout" element={<CheckoutOficial />} />
        
        
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
      </Route>
    </Route>
    <Route path="*" element={<h1>Not found</h1>} />
  </Routes>
  )
}

export default AppRouter
