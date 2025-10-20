export default function Button({quantity, handleAddToCart, item, handleRemoveFromCart}) {
  return (
     <div className="relative w-full h-20">
              {quantity === 0 ? (
             <button  onClick={() => handleAddToCart(item)} className="absolute flex gap-2  left-1/2  w-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full border-1 border-red-300 bg-white text-black py-3 px-6 text-sm shadow-md">
             <img src="/images/icon-add-to-cart.svg" alt="add-tocart-icon"/> Add to Cart
            </button>): (
            <div className="bg-[#e76f51] absolute flex justify-between gap-2  left-1/2  w-1/2  -translate-x-1/2 -translate-y-1/2 rounded-full py-3 px-6 text-sm shadow-md">
              <button
                className="text-xl font-bold cursor-pointer"
                onClick={() => handleRemoveFromCart(item)}
              >
                <img src="/images/icon-decrement-quantity.svg" alt="decrement-icon" />
              </button>
              <span className="text-white">{quantity}</span>
              <button
                className="text-xl font-bold cursor-pointer"
                onClick={() => handleAddToCart(item)}
              >
                <img src="/images/icon-increment-quantity.svg" alt="increment-icon" />
              </button>
            </div>
              )}  
            </div>
  );
}
