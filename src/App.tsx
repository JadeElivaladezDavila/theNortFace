import NavBar from './components/NavBar/NavBar';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';

import './App.css';
import { Footer } from './components/Footer/Footer';
import { ShoppingCartContext } from './providers/ShoppingCartContext';
import { useEffect, useState } from 'react';
import { getFromLocalStorage } from './utils/localStorage';

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

function App() {
const [productList, setProductList] = useState ([]);

//obtiene el carito de compras de compras si existe en la bodega
 useEffect(() => {
 const result = getFromLocalStorage(PRODUCT_LIST_KEY);
  if (result) {
    setProductList(result);
  }
}, []) ;

  return (
    <ShoppingCartContext.Provider value={{
      productList,
      setProductList
    }}>
      <div className="app">
        <NavBar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </ShoppingCartContext.Provider>
  );
}

export default App;
