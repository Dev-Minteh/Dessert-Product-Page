export default function Cart({cartItems,handleRemoveFromCart}) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleComfirmOrder = () => {
    // Logic to handle order confirmation 
    
    alert("Order confirmed!");
  };
  return (
       <div className="w-full md:w-1/4 mt-10 md:mt-0 md:ml-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-[#e76f51] mb-2">Your Cart ({cartItems.length})</h3>
          
         {cartItems.length === 0 ? (
          <>
           <p className="text-gray-500">No items in cart.</p>
            <img src="public/images/illustration-empty-cart.svg" className="w-16 h-16 mx-auto my-4" alt="Empty Cart" />
          </>
          ) : (
          
            cartItems.map((item, idx) => (
              <div key={idx}>
             <ul key={idx} className="text-sm text-gray-700 space-y-1">
            <div className="flex justify-between items-center mb-2">
            <div className="mt-2">
            <p className="font-medium text-sm">{item.name}</p>
            <p><span className="text-[#e76f51]">x{item.quantity}</span> <span className="font-light text-sm ">@${item.price.toFixed(2)}</span></p>
            </div>
            <div>
              <button
              className="text-gray px-2 py-1"
              onClick={() => handleRemoveFromCart(item)}
            >
              <img src="/images/icon-remove-item.svg" />
            </button>
            </div>
            </div>
          </ul>
          <div className="mt-4 border-gray-300 border-t pt-2">
          </div>
            </div>
            ))
           
          )}
          
         <div className="flex justify-between mt-4 pt-2">
            <p>order total</p>
            <p className="font-bold text-right text-lg">${totalPrice}</p>
          </div>  
           <div className="mt-2 bg-green-50 flex items-center gap-2 p-2 rounded text-xs text-green-700" >
           <img src="/images/icon-carbon-neutral.svg" /> This is a carbon-neutral delivery
          </div>
           <button onClick={handleComfirmOrder} className="mt-4 w-full bg-[#e76f51] text-white py-2 rounded hover:bg-[#d45b3c]">
            Confirm Order
          </button>
          
        </div>
      </div>
  );
}