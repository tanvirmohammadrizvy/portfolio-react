import React from 'react'
import { Link } from 'react-router-dom'
import '../../Assets/Bootstrap/bootstrap.min.css'
import '../../Assets/Bootstrap/style.css'

function Topbar() {
  return (
    <div>
        <header className="header-area header-style-two header--transparent color-black header--sticky">
            <div className="header-wrapper">
                <div className="header-left d-flex align-items-center">
                    <div className="logo">
                        <Link to="/">
                            <img src="assets/images/logo/logo-symbol-dark.png" alt="Creative Agency"/>
                        </Link>
                    </div>

                    <nav className="mainmenunav d-lg-block ml--50">
                        <div className="navbar-example2">
                            <ul className="mainmenu nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation active" href="#home">Home</a>
                                </li>
                                <li>
                                    <a className="nav-link smoth-animation" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#service">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#portfolio">Portfolio</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="header-right">
                    <div className="social-share-inner">
                        <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                            <li><a href="https://www.facebook.com/tanvirmohammad2" target="_blank"><i
                                        className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li> 
                            <li><a href="https://twitter.com/tanvirmohammad2" target="_blank"><i
                                        className="fab fa-twitter"></i></a>
                            </li>
                            <li><a href="https://www.instagram.com/rizvy.me/" target="_blank"><i
                                        className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>


                    <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                        <span className="menutrigger text-white">
                            <i data-feather="menu"></i>
                        </span>
                    </div>
                    <div className="close-menu d-block d-lg-none">
                        <span className="closeTrigger">
                            <i data-feather="x"></i>
                        </span>
                    </div>
            </div>
            </div>
        </header>
    </div>
  )
}

export default Topbar