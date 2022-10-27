import React, { useState} from "react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";

const MENU_LIST = [
 {text: "//   Home", href: "/"},
 {text: "//   About", href: "/about"},
 {text: "//   Expertise", href: "/expertise"},
 {text: "//   Work History", href: "/workhistory"},
 {text: "//   Projects", href: "/projects"}
];

const NavBar  = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
          <Image
            src="/logo.png"
            alt="coding logo"
            width={45}
            height={45}
          />
          </a>
        </Link>
        <div onClick={()=>setNavActive(!navActive)} className={`nav__menu-bar`}>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, index) => (
            <div
              onClick={() => {
                setActiveIndex(index);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem {...menu} />
            </div>
          ))}
        </div>
        <div></div>
      </nav>
    </header>
  );
};

export default NavBar;