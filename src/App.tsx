import { } from 'react'
import Navbar from './components/navbar'
import './App.css'
import {BrowserRouter as Router , Route} from "react-router-dom"


function App() {
  return(
    <Router>
    <>
    <Navbar/>
    <Route path='/'>
    </Route>
    </>
    </Router>
  )
  }
export default App
