import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
// import 'bulma/css/bulma.min.css';
import home from "../assets/icons/home.svg";
import ourGrads from "../assets/icons/ourGrads.svg";
import events from '../assets/icons/events.svg';
import connect from '../assets/icons/connect.svg';
import admin from '../assets/icons/admin.svg';
import locate from '../assets/icons/locate.svg';
import tech_ninjas from '../assets/icons/tech_ninjas.svg';

import axios from "../axios";


const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  const [gradsBatchYears, setGradsBatchYears] = useState([]);
  
  useEffect(() => {
    axios.get(`/gradsBatchYear.json`)
      .then(res => setGradsBatchYears(res.data.gradsBatchYear))
      .catch(err => console.log(err));
  }, [])
  
  const [isActive, setIsActive] = useState(false);
  let navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" aria-current="page" to="/">
                  <img src={home} className="navbarIcon" />
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown d-flex align-items-center">
                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={ourGrads} className="navbarIcon" />
                  Our Grads
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {gradsBatchYears.map((item, index) => {
                    return <li>
                            <Link className="dropdown-item" to={`/grads/${item}`}>Batch {item}</Link>
                          </li>
                  })}
                </ul>
              </li>
              
              <li className="nav-item dropdown d-flex align-items-center">
                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={connect} className="navbarIcon" />
                  Connect
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {isLoggedIn?(
                    <>
                      <li>
                        <Link className="dropdown-item" to="/register">Setup Account </Link>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={() => {localStorage.removeItem("token"); setIsLoggedIn(false); navigate('/login') }}>Logout</button>
                      </li>
                    </>
                  ):(
                    <>
                      <li>
                        <Link className="dropdown-item" to="/login">Login </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/activateAccount">Activate Account </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              
              <li className="nav-item dropdown d-flex align-items-center">
                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={events} className="navbarIcon" />
                  Events
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/events/present">Present</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/events/past">Past</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/events/future">Future</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" aria-current="page" to="/locate">
                  <img src={locate} className="navbarIcon" />
                  Locate Grads
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" aria-current="page" to="/admin">
                  <img src={admin} className="navbarIcon" />
                  Admin
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" aria-current="page" to="/about">
                  <img src={tech_ninjas} className="navbarIcon" />
                  Tech Ninjas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
