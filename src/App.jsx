
import './App.css'
import RootLayouts from '/src/Components/layouts/RootLayouts';
import About from '/src/Components/pages/About';
import Error from '/src/Components/pages/Error';

import Home from '/src/Components/pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
   
        <Routes>
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />          
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<About/>} /> 
        <Route path="/protfolio" element={<About/>} /> 
        <Route path="/price" element={<About/>} />  
         <Route path="/blog" element={<About/>} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
      
    </>
  );
};

export default App;
