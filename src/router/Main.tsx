
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Weather from '../pages/Characters';



function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/weather" element={<Weather/>}  />
      </Routes>
    </>
  );
}

export default Main;