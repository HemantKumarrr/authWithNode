import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Private from './components/Private/Private'

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route element={ <Private /> }>
            <Route path='/cards' element={<Cards />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
