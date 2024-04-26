
import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import { useAppSelector } from './hooks/store';
import Characters from './pages/Characters';
import { Navbar } from './components/Navbar';
import React from 'react';
import { todoActions } from './hooks/todoActions';
import { authActions } from './hooks/authActions';

function App() {
  const { getListTodos } = todoActions();
  const { addUser } = authActions();
  const auth = useAppSelector((state) => state.authReducer.isAuth);
  const toDoList = useAppSelector((state) => state.todoReducer);
  const sesionString = localStorage.getItem('sesion');

  React.useEffect(() => {
    if (sesionString !== null) { // Comprueba si la cadena no es nula
      try {
        const parsedObject = JSON.parse(sesionString);
        // guardo en redux
        addUser({ id: parsedObject.id, email: parsedObject.email, isAuth: true });

        if (toDoList.length === 0) {
          getListTodos(parsedObject?.id);
        }
      } catch (error) {
        console.error('Error al convertir la cadena en objeto:', error);
      }
    }
  }, [])


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
