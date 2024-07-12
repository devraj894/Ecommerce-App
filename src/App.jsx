import React from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Cart from "./pages/cart/Cart"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import NoPage from "./pages/noPage/NoPage"
import MyState from './context/data/MyState'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allProducts/AllProducts'

function App() {

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allproducts' element={<Allproducts/>}/>
          <Route path='/order' element={
            <protectedRouteForUser>
              <Order />
            </protectedRouteForUser>
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={
            <protectedRouteForAdmin>
              <Dashboard />
            </protectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/productInfo/:id' element={<ProductInfo/>}/>
          <Route path='/addProduct' element={
            <protectedRouteForAdmin>
              <AddProduct/>
            </protectedRouteForAdmin>
          }/>
          <Route path='/updateProduct' element={
            <protectedRouteForAdmin>
              <UpdateProduct/>
            </protectedRouteForAdmin>
          }/>
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  )
}

export default App

export const protectedRouteForUser = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

const protectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'chintu12@gmail.com'){
    return children
  }else{
    <Navigate to = {'/login'}/>
  }
}
