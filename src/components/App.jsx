import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar/Navbar"
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetaiContainer/ItemDetailContainer';
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
