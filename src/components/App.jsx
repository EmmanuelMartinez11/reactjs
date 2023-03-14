//Estilos
import "./App.css"
import 'react-toastify/dist/ReactToastify.css'; //toastify
//Componentes
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Checkout from "./Checkout/Checkout";
import Cart from "./Cart/Cart";
//React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Contexto
import { CarritoProvider } from "../context/CarritoContext";
//Libreria
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
            <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:idCategoria" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </CarritoProvider>
          <ToastContainer/>
      </BrowserRouter>
    </div>
  );
}

export default App;