import React from 'react'

import { FaBiking } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <div>
      <FaBiking size="2em" color="green" style={{ paddingTop:"2em", paddingLeft: "3em"}}/> <h1>BySykler</h1>
    </div>
    
  )
}

export default Header