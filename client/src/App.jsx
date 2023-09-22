import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import MyGet from './components/Get';
import MyForm from './components/Form';


function App() {

  return (
    <div className="App">
      <MyNavBar />
      
      <MyGet/>
      <MyForm/>

    </div>
  )
}

export default App
