import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonial from './components/Testimonial'


function App() {
  

  return (
    
    <div className='app'>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Testimonial/>
    <Contact/>
   </div>
    
  )
}

export default App
