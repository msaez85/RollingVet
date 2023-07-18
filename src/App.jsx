import './App.css'
import Header from './components/PaginaPrincipal/Header/Header'
import Slider from './components/PaginaPrincipal/Slider/Slider'
import Footer from './components/PaginaPrincipal/Footer/Footer'
import Servicios from './components/PaginaPrincipal/Servicios/Servicos'




function App() {
  return (
    <>
    <div className="principals">
      <Header/>
    </div>
    <div className='slider'>
      <Slider/>
    </div>
    <Servicios/>
    <div>
      <Footer/>
    </div>


    </>
  )
}

export default App
