import React, { createContext, useState, useContext } from 'react'
import toast from 'react-hot-toast';

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const MAX_QUANTITY = 10;

  const addToCart = (item) => {
    setCartItems(prev => {
      const isExist = prev.find(product => product.id === item.id);

      if (isExist) {
        if (isExist.quantity >= MAX_QUANTITY) {
          alert(`Sorry! Maximum ${MAX_QUANTITY} items per flavor. ✨`);
          return prev;
        }

        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast.success(`${item.name} added to cart! 🥐`, {
      style: {
        border: '1px solid #F199B9',
        padding: '16px',
        color: '#b60848',
        borderRadius: '20px',
        fontWeight: 'bold'
      },
      iconTheme: {
        primary: '#F199B9',
        secondary: '#FFFAEE',
      },
    });
  };

  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const minusQuantity = (id) => {
    setCartItems(prev => {
      const product = prev.find(product => product.id === id);
      if (product.quantity > 1) {
        return prev.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p)
      } else {
        return prev.filter(p => p.id !== id)
      }
    })
  }
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems, addToCart, totalCount, removeFromCart, minusQuantity, clearCart, MAX_QUANTITY
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);
