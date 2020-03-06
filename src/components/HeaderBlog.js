import React from 'react'

import logo from '../assets/images/dave-stern-consulting.png';
import header from '../assets/css/header.css';


const HeaderBlog = (props) => (
    <header className="main-header" id="header">
       <h1 class="animated fadeInDown delay-07s"> <img src={logo} alt="" /></h1>
       <h1>Blog</h1>
       <p></p>
    <a class="servicelink" href="#content"><i class="fa fa-angle-down fa-4x"></i></a>
    <br/>
   </header>


)

export default HeaderBlog
