import React from 'react'
import './Navar.css'

export const Navar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <a href="#">
                    <img src="image/logo_image.png" alt="not found"/>
                    </a>
                </div>
                <div className="menu">
                    <ul>
                        <li> 
                            <a href="#">home</a>
                        </li>
                        <li> 
                            <a href="#">abaout</a>
                        </li>
                        <li> 
                            <a href="#">service</a>
                        </li>
                        <li> 
                            <a href="#">protfolio</a>
                        </li>
                        <li> 
                            <a href="#">price</a>
                        </li>
                        <li> 
                            <a href="#">blog</a>
                        </li>
                    </ul>
                </div>
                <div className="nav_btn">
                    <a className="common_btn" href="#">contact us</a>
                </div>
            </div>
        </div>
    </nav>
  )
}
