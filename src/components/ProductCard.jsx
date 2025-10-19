import Button from "./Button";

export default function ProductCard({ item, quantity, handleAddToCart, handleRemoveFromCart }) {
  return (
    <div   className="p-1 w-full flex flex-col justify-between">
        <img
              src={item.image.thumbnail}
              alt={item.name}
              className="h-50 object-cover rounded-md "
            />
           {/* <Button quantity={quantity} item={item}  onClick={() => handleAddToCart(item)}>add to cart</button> */}
           <Button quantity={quantity} handleAddToCart={handleAddToCart} item={item} handleRemoveFromCart={handleRemoveFromCart}/>
            <div className="mt-2">
              <p className="text-sm text-gray-500 font-medium">{item.category}</p>
              <h3 className="text-lg font-semibold text-[#3a1d0e]">{item.name}</h3>
              <p className="text-[#e76f51] font-semibold">${item.price.toFixed(2)}</p>
            </div>
          </div>
  );
}


