import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
 

  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
