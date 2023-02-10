import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveNavbar = () => {
  return (
    <>
    <Link to={"/"} className="header-link">
    <div className="header">
      <button  className="hamburger">
        <hr className="ham" />
        <hr className="ham" />
        <hr className="ham" />
      </button>
      <div>
        <span className="s s1">The</span>
        <span className="s s2">Siren</span>
      </div>
    </div>

  </Link>
  <div className="toggle-navbar">
   <ul type='none'>
    <li ><Link to={'/'} className='navlink'> Home</Link></li>
    <li><Link to={'/Bollywood'} className='navlink'> Bollywood</Link> </li>
    <li><Link to={'/Hollywood'} className='navlink'>Hollywood</Link></li>
    <li><Link to={'/Tech'} className='navlink'>Technology</Link></li>
    <li><Link to={'/Fitness'} className='navlink'>Fitness</Link></li>
    <li><Link to={'/Food'} className='navlink'>Food</Link></li>
    </ul>
    </div>
</>
  )
}

export default ResponsiveNavbar