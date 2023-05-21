import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import '../src/components/Navbar.css';
import Navbar from './components/Navbar';
import Task from './components/Task';
import Task01 from './components/Task01';
import Task02 from './components/Task02';
import Task03 from './components/Task03';


function App() {
  return (
 

    <>
    <Navbar/>
        <Routes>
        <Route path="/" element={<Task/>} />
         <Route path="/Task01" element={<Task01 />} />
          <Route path="/Task02" element={<Task02 />} />
          <Route path="/Task03" element={<Task03 />} />
        </Routes>
        </>
 
  );
}

export default App;
