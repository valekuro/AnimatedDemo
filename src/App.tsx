import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { AnimatePresence } from "framer-motion";
import Products from "./pages/Products";
function App() {



  return (
    <div className="App">
   
      <BrowserRouter> 
        <Header />
       <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />

            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </AnimatePresence> 
      </BrowserRouter>  
    
    </div>
 
  );
}

export default App;
