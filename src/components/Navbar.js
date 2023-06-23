import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {

   const allUser = useSelector((state) => state.app.users);

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
  <div className="container-fluid">
    <span className="navbar-brand">FORM</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/read">
            All Data  ({allUser.length}) </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/">Create Data</Link>
        </li>   
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
