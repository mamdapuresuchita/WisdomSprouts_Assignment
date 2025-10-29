import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   
    <div className='sticky-top'><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    
  <div className="container-fluid">
    <Link to="/" className="navbar-brand text-center text-danger fs-2 fw-bolder">Movies Hub</Link>
    
   
  </div>

</nav>

</div>
</>
  )
}

export default Navbar