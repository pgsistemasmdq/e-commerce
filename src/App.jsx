import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <> 
      <BrowserRouter>
        <Banner />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route path="/category/:category?" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
