import './Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav() {

      const[NavContent,setNavContent]=useState();

    useEffect(()=>{
        setInterval(()=>{
            if(localStorage.getItem("role")=="admin")
            {
                setNavContent( <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                    <a href="" class="navbar-brand">
                        <h1 class="m-0 display-4 text-uppercase text-white"><i class="bi bi-building text-primary me-2"></i>ROOMRENT</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a class="nav-item nav-link active"><Link to ="/admin">Admin Home</Link></a>
                           <a class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                           <a class="nav-item nav-link"><Link to="/manageuser">Manage User</Link></a>
                            </div>
                    </div>
                </nav>
            </div>);
            }
            else if(localStorage.getItem("role")=="user")
            {
                setNavContent( <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                    <a href="" class="navbar-brand">
                        <h1 class="m-0 display-4 text-uppercase text-white"><i class="bi bi-building text-primary me-2"></i>ROOMRENT</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a class="nav-item nav-link active"><Link to ="/user">User Home</Link></a>
                           <a class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                            </div>
                    </div>
                </nav>
            </div>
            );
            }
            else
            {
                setNavContent(
                    <div>
      {/* Navbar Start */}
      <div class="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
        <nav class="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
            <a href="" class="navbar-brand">
                <h1 class="m-0 display-4 text-uppercase text-white"><i class="bi bi-building text-primary me-2"></i>ROOMRENT</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a class="nav-item nav-link active"><Link to ="/">Home</Link></a>
                    <a class="nav-item nav-link"><Link to ="/about">About</Link></a>
                    <a class="nav-item nav-link"><Link to = "/contact">Contact</Link></a>
                    <a class="nav-item nav-link"><Link to ="/service">Service</Link></a>
                    <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                    <a class="nav-item nav-link"><Link to="/login">Login</Link></a>
                    </div>
            </div>
        </nav>
    </div>
    {/* Navbar End */}
    </div>
                );
            }
        },2000);
    },[]);

  return (
 <div>{ NavContent }</div>
  );
 }

export default Nav;
