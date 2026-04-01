
import './App.css'
import Banner from './components/banner/banner'
import Count from './components/countSection/count'
import Footer from './components/footer/footer'
import GetStarted from './components/getStarted/getStarted'
import Models from './components/models/models'
import Navbar from './components/navbar'
import Pricing from './components/pricing/pricing'



const getModels = async() =>{
  const res = await fetch("/models.json")
  return res.json();
}

const modelPromise = getModels();


function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Count></Count>
    <Models modelPromise={modelPromise} ></Models>
    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <Footer></Footer>
    </>
  )
}

export default App
