
import './App.css'
import Banner from './components/banner/banner'
import Count from './components/countSection/count'
import Footer from './components/footer/footer'
import GetStarted from './components/getStarted/getStarted'
import Navbar from './components/navbar'
import Pricing from './components/pricing/pricing'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Count></Count>
    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <Footer></Footer>
    </>
  )
}

export default App
