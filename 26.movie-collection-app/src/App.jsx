
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Movies from './Pages/Movies'
import MovieDetails from './Pages/MovieDetails'
import Likes from './Pages/Likes'
import Comments from './Pages/Comments'

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Movies/>} ></Route>
      <Route path="/movie/:movieID" element={<MovieDetails/>}>
        <Route path="likes" element={<Likes/>}></Route>
        <Route path="comments" element={<Comments/>}></Route>
      </Route>

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
