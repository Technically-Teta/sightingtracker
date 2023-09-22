import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import MyGet from './components/Get';
import MyForm from './components/Form';
import Tablebox from './components/table';


function App() {

  return (
    <div className="App">
      <MyNavBar />
      <Tablebox/>
      <MyGet/>
      <MyForm/>

    </div>
  )
}

export default App
