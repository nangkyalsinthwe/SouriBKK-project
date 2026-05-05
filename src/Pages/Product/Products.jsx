import React from 'react';
import { ShoppingCart } from 'lucide-react';
import productData from '../../data.json';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../../CartContext';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const { addToCart, cartItems, MAX_QUANTITY } = useCart();

  const isMaxedOut = (id) => {
    const itemInCart = cartItems?.find(p => p.id === id);
    return itemInCart ? itemInCart.quantity >= MAX_QUANTITY : false;
  };

  const filteredProducts = typeFilter
    ? productData.products.filter(item => item.type === typeFilter) : productData.products


  const productsitems = filteredProducts.map((product) => (
    <div className="bg-purple-50 group rounded-2xl border border-gray-100 flex flex-col shadow-sm hover:shadow-xl" key={product.id}>
      <Link
        to={product.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }} className="block relative overflow-hidden aspect-square" >
        <img src={product.image_url} alt={product.name} className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500" />
      </Link>
      <div className='p-6 flex flex-col grow'>
        <h2 className="text-xl text-gray-700 mb-2 leading-tight italic uppercase">{product.name}</h2>
        <p className="text-gray-900 text-xl mb-6 grow line-clamp-2 font-bold">฿{product.price}</p>

        <button
          onClick={() => { addToCart(product) }}
          disabled={isMaxedOut(product.id)}
          className={`
            w-full font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ease-in-out active:scale-95 active:shadow-inner
            ${isMaxedOut(product.id)
              ? "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300"
              : "bg-[#F199B9] hover:bg-[#b60848] text-white shadow-lg shadow-pink-100 hover:shadow-pink-200 hover:-translate-y-0.5"
            }
          `}
        >
          <ShoppingCart
            size={18}
            className={`${!isMaxedOut(product.id) ? "group-hover:animate-bounce" : ""}`}
          />
          <span>
            {isMaxedOut(product.id) ? "Limit Reached (10)" : "Add to Cart"}
          </span>
        </button>

      </div>

    </div >
  ))


  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  const getButtonClass = (type) => {
    const isActive = typeFilter === type;
    return `px-6 py-2 rounded-full font-bold transition-all duration-300 border-2 ${isActive
      ? "bg-[#F199B9] border-[#F199B9] text-white scale-105 shadow-md"
      : "bg-white border-[#F199B9] text-[#F199B9] hover:bg-[#F199B9]/10"
      }`;
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen p-4">
      <header className="text-start mb-16">
        <h1 className="font-souri text-5xl text-[#F199B9] mb-4 uppercase italic">
          All Available Flavors
        </h1>
        <p className="text-gray-500 italic">Discover our signature Fatcarons & Sets</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-4 mb-14   justify-center gap-8 ">
        <button className={getButtonClass("fatcaron")} onClick={() => handleFilterChange("type", "fatcaron")}>Fatcarons</button>
        <button className={getButtonClass("set")} onClick={() => handleFilterChange("type", "set")}>Gift Sets</button>
        <button className={getButtonClass("cake")} onClick={() => handleFilterChange("type", "cake")}>Birthday Cake</button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="text-gray-400 hover:text-red-500 underline text-sm font-bold uppercase tracking-widest px-4"
          >Clear filter</button>
        ) : null}
      </div>


      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center'>
        {productsitems}
      </div>
    </div >
  )
}

export default Products

