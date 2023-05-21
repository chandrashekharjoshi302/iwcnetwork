import React from 'react';
import { Router, Route, Link} from 'react-router-dom';

import './Navbar.css';


function Navbar() {
  return (
    <>
    <div className="App">
  
  <nav className="navbar">
   <ul className="navbar-list">
     <li>
       <Link to="/" className="navbar-link">Logo</Link>
     </li>
     <li>
       <Link to="/Task01" className="navbar-link">Task01</Link>
     </li>
     <li>
       <Link to="/Task02" className="navbar-link">Task02</Link>
     </li>
     <li>
       <Link to="/Task03" className="navbar-link">Task03</Link>
     </li>
   </ul>
 </nav> 

</div>
   
      



    </>
  );
}


export default Navbar;





