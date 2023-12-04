import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"

import './App.css'
import './assets/main.scss'
import { Product } from "./pages/Product"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
