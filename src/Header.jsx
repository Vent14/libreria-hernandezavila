import React from "react";
import logo from "./imagen/libro-logo-CMS.png";
const Header = () => {
    return (
        <div className="Container">
<ul className="nav d-flex align-items-center">
  <li className="nav-item">
    <a className="nav-link active link_header" aria-current="page" href="#"><img src={logo} width="30" alt="" /></a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Descubre</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Ofertas</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link_header" href="#">Sucursales</a>
  </li>
</ul>
</div>
    )
}

export default Header;