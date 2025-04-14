import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const NavigationURLs = [
  { item: "Home", linkTo: "/" },
  { item: "Contact", linkTo: "/contact" },
  { item: "About", linkTo: "/about" },
];

export default function Header() {
  return (
    <>
      <header className="header">
        {/* other elements */}
        <nav>
          <ul>
            {NavigationURLs.map(({ item, linkTo }) => {
              return (
                <li>
                  <NavLink to={linkTo} key={`${item}-key`}>
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* other elements */}
      </header>
    </>
  );
}
