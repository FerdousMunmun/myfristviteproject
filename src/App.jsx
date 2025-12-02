
import './App.css'
import RootLayouts from './Components/Layouts/RootLayouts';
import About from './Components/Pages/About';
import Error from './Components/Pages/Error';

import Home from './Components/Pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
   
        <Routes>
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />          
        <Route path="/about" element={<About/>} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
      
    </>
  );
}

export default App;
