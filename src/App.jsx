import './App.css'
import NavScrollExample from './components/Cabecera'
import UncontrolledExample from './components/Slider'
import UncontrolledExample2 from './components/Footer'




function App() {
  return (
    <>
    <div className="principal">
      <NavScrollExample/>
    </div>
    <div className='slider'>
      <UncontrolledExample/>
    </div>
    <div>
      <UncontrolledExample2/>
    </div>


    </>
  )
}

export default App
