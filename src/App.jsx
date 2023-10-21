import React from 'react'
import Cart from './pages/Cart'

import Home from './pages/Home'
import Login from './pages/Login'
import ProductList from './pages/ProductList'

import Register from './pages/Register'

import {Routes, Route,BrowserRouter as Router, Navigate} from "react-router-dom"
import ProductPage from './pages/ProductPage'


const App = () => {
console.log("App")
const user = false
  return (
 

<Router>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact  path="/products/:category" element={<ProductList/>}/>
      <Route  exact  path="/product/:id" element={<ProductPage/>}/>
      <Route  exact path="/cart" element={<Cart/>}/>
      <Route
        exact   path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      <Route exact path="/login" element={user ? <Navigate to ="/"/> : <Login/>}/>

    </Routes>
</Router>

 
 

  )
}

export default App
