import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../../CartContext";
import { auth } from '../../firebase'
import { Link, useNavigate } from "react-router-dom";

const Carts = () => {
  const { addToCart, cartItems, removeFromCart, minusQuantity, clearCart } = useCart();
  const navigate = useNavigate()

  const handleCheckOut = () => { navigate("/checkout"); }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="font-souri text-4xl text-[#f199b9] mb-8 italic uppercase">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-purple-50 rounded-3xl">
          <p className="text-gray-800 italic font-bold text-2xl mb-6">Your cart is empty. Time to get some treats! 🥐</p>
          <Link
            to="/products"
            className="bg-[#f199b9] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#b60848] transition-colors"
          >
            Go to Shop
          </Link>
        </div>
      )
        : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-purple-50 p-4 shadow-xl shadow-black/5 rounded-2xl border border-gray-100">
                <div className="items-center flex gap-7">
                  <img src={item.image_url} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  <div className="grow">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="font-bold">฿ {item.price.toLocaleString()}</p>
                    <div className=" flex items-center gap-4 mt-3">
                      <button
                        onClick={() => minusQuantity(item.id)}
                        className="p-1 rounded-full bg-pink-200 hover:bg-red-500 text-gray-600 hover:text-white transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold text-lg">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="p-1 rounded-full bg-pink-200 hover:bg-green-500 text-gray-600 hover:text-white transition-colors">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 mr-4 hover:bg-red-50 p-3 rounded-full transition-all group">
                    <Trash2 size={24} className="group-hover:scale-110" />
                  </button>
                </div>
              </div>
            ))}
            <div className="bg-purple-50 p-8 rounded-3xl mt-10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="text-2xl font-black text-gray-900">
                  ฿ {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleCheckOut}
                className="w-full block bg-[#f199b9] text-center hover:bg-[#b60848] text-white font-black py-4 rounded-2xl transition-all duration-200 ease-in-out active:scale-95 active:shadow-inner shadow-lg shadow-pink-200 uppercase tracking-widest"
              >
                Check Out
              </button>
            </div>
          </div>
        )}
    </div>
  )
}
export default Carts;

