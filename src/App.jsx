import './App.css'
import Navbar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'

function App() {
  const  presentación = "Bienvenidos a mi tienda!"

  return (
    <div>
      <Navbar />
      <ItemListContainer  greeting = {presentación}/>
    </div>
  )
}

export default App
