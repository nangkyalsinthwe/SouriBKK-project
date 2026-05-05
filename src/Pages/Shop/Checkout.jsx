import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
import { ShoppingBag } from "lucide-react";

export default function Checkout() {
  const { clearCart, cartItems } = useCart()

  const navigate = useNavigate()

  const handleConfirmOrder = () => {
    clearCart();
    navigate("/thankyou")
  }
  return (
    <div className="bg-white rounded-[3rem] shadow-2xl border-none shadow-pink-200 max-w-md text-center min-h-[60vh] mx-auto p-10 m-20">
      <ShoppingBag className="mx-auto text-[#f199b9] mb-4" size={48} />
      <h1 className="font-souri text-3xl text-gray-800 mb-6 uppercase italic">Confirm Order</h1>
      <div className="bg-pink-50 p-6 rounded-2xl mb-8">
        <p className="text-gray-600 italic">Total Items: {cartItems.length}</p>
        <p className="text-2xl font-black text-[#b60848]">฿ {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</p>
      </div>
      <button onClick={handleConfirmOrder}
        className="bg-[#f199b9] text-white px-6 py-4 rounded-2xl font-bold hover:bg-[#b60848] transition-all duration-200 ease-in-out active:scale-95 active:shadow-inner">
        Place Order Now
      </button>
    </div>
  )

}

