
import { useState } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Count from './components/countSection/count'
import Footer from './components/footer/footer'
import GetStarted from './components/getStarted/getStarted'
import Models from './components/models/models'
import Navbar from './components/navbar'
import Pricing from './components/pricing/pricing'
import Cart from './components/cart/cart'
import Tab from './components/tab/tab'
import { ToastContainer } from 'react-toastify'



const getModels = async() =>{
  const res = await fetch("/models.json")
  return res.json();
}

const modelPromise = getModels();


function App() {
  
const [activeTab , setActiveTab] = useState("products");
const [carts ,setCarts] = useState([ ]);

console.log(carts)


  return (
    <>
    <Navbar carts={carts}></Navbar>
    <Banner></Banner>
    <Count></Count>
    <Tab setActiveTab={setActiveTab} activeTab={activeTab} carts={carts} setCarts={setCarts} ></Tab>

    {activeTab==="products" && <Models modelPromise={modelPromise} setCarts={setCarts} carts={carts}></Models> }
    {activeTab==="cart" &&  <Cart carts={carts} setCarts={setCarts}></Cart>}
    
    
    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <Footer></Footer>
    <ToastContainer/>
    </>
  )
}

export default App
