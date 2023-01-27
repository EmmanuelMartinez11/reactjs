import './App.css';

import Navbar from "./Navbar/Navbar"
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"greeting"}/>
    </div>
  );
}

export default App;
