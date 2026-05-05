import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './CartContext';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './index.css'
import Layout from "./Components/Layout"
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Products from './Pages/Product/Products';
import ProductDetails from './Pages/Product/ProductDetails';
import ScrollToTop from './ScrollToTop';
import Carts from './Pages/Shop/Carts';
import ThankYou from './Pages/Shop/ThankYou';
import Checkout from './Pages/Shop/Checkout';
import AuthRequired from './Components/AuthRequired';
import { Toaster } from 'react-hot-toast';
import './index.css'


function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/SouriBKK-project">
        <ScrollToTop />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: '#fff',
              color: '#b60848',
              borderRadius: '15px',
              border: '1px solid #F199B9'
            }
          }}
        />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="carts" element={<Carts />} />
            <Route element={<AuthRequired />}>
              <Route path='checkout' element={<Checkout />} />
              <Route path='thankyou' element={<ThankYou />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
