import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Link, useParams, useLocation } from 'react-router-dom'
import productData from '../../data.json';
import { useCart } from '../../CartContext';


const ProductDetails = () => {
  const { id } = useParams()
  const location = useLocation()
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const product = productData.products.find(p => p.id === id)

  const { addToCart, cartItems, MAX_QUANTITY } = useCart();

  const isMaxedOut = (id) => {
    const itemInCart = cartItems?.find(p => p.id === id);
    return itemInCart ? itemInCart.quantity >= MAX_QUANTITY : false;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 min-h-screen">
      <Link
        to={`..${search}`}
        relative="path"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#F199B9] mb-8 transition-colors font-bold uppercase tracking-wider text-sm"
      >&larr; <span>Back to {type} </span></Link>

      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-[3rem] border border-gray-100 shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]">
          <img src={product.image_url}
            className='w-100 h-100 object-cover rounded-4xl hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_5px_#F199B9]' />
          <div className="flex flex-col gap-6">
            <h2 className='font-souri text-3xl text-gray-900 leading-tight italic uppercase'>{product.name}</h2>
            <p className="text-3xl font-black text-[#b60848] italic">฿ {product.price}</p>
            <ul className="space-y-2">
              {product.description.split('|').map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600 italic">
                  {item.includes("Pre-order") ? (
                    <span className="text-orange-400 mt-1">🕒</span>
                  ) : (
                    <span className="text-[#F199B9] mt-1">✦</span>
                  )}
                  {item.trim()}
                </li>
              ))}
            </ul>

            <button onClick={() => addToCart(product)}
              disabled={isMaxedOut(product.id)}

              className="w-full bg-[#F199B9] hover:bg-[#b60848] text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 duration-200 ease-in-out active:scale-95 active:shadow-inner">
              <ShoppingCart size={18} />
              {isMaxedOut(product.id) ? "Limit Reached" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
