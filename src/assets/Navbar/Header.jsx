import React from "react";
import logo from "../imagen/libro-logo-CMS.png";
import CartWidget from "../CardWid/CardWidget";

const Header = () => {
    return (
        <div className="Container">
<ul className="nav d-flex align-items-center justify-content-center">
  <li className="nav-item">
    <a className="nav-link active link_header" aria-current="page" href="#"><img src={logo} width="30" alt="" /></a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Libros</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Ebooks y Audiolibros</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Oportunidades</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Sucursales</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#"><CartWidget/></a>
  </li>

</ul>

</div>
    )
}

export default Header;