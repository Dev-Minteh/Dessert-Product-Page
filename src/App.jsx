// import './App.css'
//  import Cart from './components/Cart';
//  import desserts from './data/data.json';
// import ProductCard from './components/ProductCard';
// import { useReducer } from 'react';

// const initialProducts = desserts.map(product => ({
//   ...product,
//   quantity: 0, // Add quantity field for tracking
// }));

// function productsReducer(state, action) {
//   switch (action.type) {
//     case 'add_to_cart':
//       return state.map((product) => product.name === action.payload.name ? 
//       {...product, quantity: product.quantity + 1} : product
//     );
//     case 'remove_from_cart':
//       return state.map((product) => product.name === action.payload.name ? 
//       {...product, quantity: product.quantity - 1} : product
//     );
//     default:
//       return state;
//   }
// }
    
// function App() {

//   const [products, dispatch] = useReducer(productsReducer, initialProducts);


//   const handleAddToCart = (product) => {
//     dispatch({ type: 'add_to_cart', payload: product });
//   };

//   const handleRemoveFromCart = (product) => {
//     dispatch({ type: 'remove_from_cart', payload: product });
//   };

//   const cartItems = products.filter(item => item.quantity > 0);


//   return (
//     <>
//    <div className="bg-[#fff8f4] min-h-screen flex flex-col md:flex-row p-6">
//       <div className="w-full md:w-3/4 grid grid-cols-20 md:grid-cols-3 gap-6">
//         <h2 className="col-span-full text-3xl font-bold text-[#5e2b16] mb-2">Desserts</h2>
//         {products.map((item, idx) => (
    

//        <ProductCard
//         key={idx}
//         item={item}
//         idx={idx}
//         // quantity={quantity}
//         cartItems={cartItems}
//         // quantity={cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0}
//         handleAddToCart={handleAddToCart}
      
//   />
//         ))}
//       </div>
//       {/* {cartItem} */}
//       <Cart cartItems={cartItems}/>
//     </div>
//     </>
//   )
// }

// export default App


import './App.css';
import Cart from './components/Cart';
import desserts from './data/data.json';
import ProductCard from './components/ProductCard';
import { useReducer } from 'react';

const initialProducts = desserts.map(product => ({
  ...product,
  quantity: 0, // Add quantity field
}));

function productsReducer(state, action) {
  switch (action.type) {
    case 'add_to_cart':
      return state.map(product =>
        product.name === action.payload.name
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    case 'remove_from_cart':
      return state.map(product =>
        product.name === action.payload.name && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    default:
      return state;
  }
}

function App() {
  const [products, dispatch] = useReducer(productsReducer, initialProducts);

  const handleAddToCart = (product) => {
    dispatch({ type: 'add_to_cart', payload: product });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'remove_from_cart', payload: product });
  };

  const cartItems = products.filter(item => item.quantity > 0);

  return (
    <div className="bg-[#fff8f4] min-h-screen flex flex-col md:flex-row p-6">
      <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <h2 className="col-span-full text-3xl font-bold text-[#5e2b16] mb-2">Desserts</h2>
        {products.map((item, idx) => (
          <ProductCard
            key={idx}
            item={item}
            quantity={item.quantity}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>

      {/* Cart Section */}
      {/* <div className="w-full md:w-1/4 mt-10 md:mt-0 md:ml-6"> */}
        <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
      {/* </div> */}
    </div>
  );
}

export default App;

