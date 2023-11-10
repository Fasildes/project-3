//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from  "../src/markup/pages/Home/"
import AddEmployee from "../src/markup/pages/AddEmployee";
import AddInventory from './markup/pages/Addinventory';
import InventoryList from '../src/markup/pages/InventoryList';
import InventoryDetail from './markup/pages/InventoryDetail';
import Sales from './markup/pages/Sales';
import Receipt from './markup/pages/Receipt';


function App() {
  return (
    <div>
      <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/addinventory" element={<AddInventory />} />
        <Route path="/InventoryList" element={<InventoryList />} />
        <Route path="/single-inventory/:id" element={<InventoryDetail />} />
        <Route path="/Sales/:id" element={<Sales />} />
        <Route path="/Receipt" element={<Receipt />} />
      </Routes>
      </>
    </div>
  );
}
export default App;
