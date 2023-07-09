import './App.css'
import NavScrollExample from './components/Cabecera'
import UncontrolledExample from './components/Slider'



function App() {
  return (
    <>
    <div className="principal">
      <NavScrollExample/>
    </div>
    <div className='slider'>
      <UncontrolledExample/>
    </div>

    </>
  )
}

export default App
