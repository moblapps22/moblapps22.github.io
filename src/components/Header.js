import React from 'react'

import logo from '../assets/images/dave-stern-consulting.png';
import header from '../assets/css/header.css';
import style from '../assets/css/style.css';
import animate from '../assets/css/animate.css';


const Header = (props) => (
  <header className="header" id="header">
     <h1 class="animated fadeInDown delay-07s"> <img src={logo} alt="" /></h1>
        <ul class="we-create animated fadeInUp delay-1s">
            <li>Devops Engineering</li>
            <li>Comprehensive AWS Expertise</li>
            <li>Consulting CTO</li>
        </ul>
        <a class="servicelink" href="#services"><i class="fa fa-angle-down fa-4x"></i></a>
        <br/>
 </header>

)

export default Header
