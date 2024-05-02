import React, { useRef, useState } from "react";
import "./Navber.css";
import underline from "../../../public/assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navber = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navber">
      <div className="nav-logo">
        <h1>MR9</h1>
        <img src="/assets/theme_pattern.svg" alt="" />
      </div>
      <img
        onClick={openMenu}
        className="nav-mob-open"
        src="/public/assets/menu_open.svg"
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <div className="nav-mob-close">
          <img onClick={closeMenu} src="/public/assets/menu_close.svg" alt="" />
        </div>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>

          {menu === "home" ? <img src={underline} /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>

          {menu === "portfolio" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navber;
