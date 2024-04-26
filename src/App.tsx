
import './App.css';
import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import { useAppSelector } from './hooks/store';
import Characters from './pages/Characters';
import { Navbar } from './components/Navbar';

function App() {


  const auth = useAppSelector((state) => state.authReducer.isAuth);


  return (
    <div className="h-screen w-screen p-0  content-center" >
      <Router>
        {auth ? <Navbar /> : null}
        <div className="flex  justify-center auto" >
          <div className='flex-1 flex-col justify-center content-center'>
            <Routes>
              <Route path="/login" element={auth ? <Navigate replace to="/" /> : <Login />} />
              <Route path="/signup" element={auth ? <Navigate replace to="/" /> : <Signup />} />
              <Route path="/" element={auth ? <Home /> : <Navigate replace to="/login" />} />
              <Route path="/characters" element={auth ? <Characters /> : <Navigate replace to="/login" />} />
              <Route path="/contact" element={auth ? <Contact /> : <Navigate replace to="/login" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
