// ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Truck, Heart } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[#FAF9F6]">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-10 shadow-2xl shadow-pink-200 text-center border border-pink-50">

        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>

        <h1 className="font-souri text-4xl text-[#f199b9] italic uppercase mb-4">Thank You!</h1>
        <p className="text-gray-600 font-medium mb-8">
          Your treats are being prepared with love. <Heart size={16} className="inline text-pink-400" />
        </p>

        <div className="bg-purple-50 p-6 rounded-3xl mb-8 text-left space-y-4">
          <div className="flex gap-4">
            <Truck className="text-[#f199b9] shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-gray-800">Delivery Update</h4>
              <p className="text-sm text-gray-500 italic">Expected arrival: 1-2 hours within Bangkok.</p>
            </div>
          </div>
        </div>

        <Link
          to="/products"
          className="block w-full py-4 bg-[#f199b9] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#b60848] transition-all duration-200 ease-in-out active:scale-95 active:shadow-inner shadow-lg shadow-pink-100"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
}