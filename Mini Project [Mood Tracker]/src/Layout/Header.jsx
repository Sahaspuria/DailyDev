import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/header.css";

const NavigationURLs = [
  { item: "Home", linkTo: "/" },
  { item: "History", linkTo: "/history" },
  { item: "About", linkTo: "/about" },
];

export default function Header() {
  return (
    <>
      <header className="header">
        {/* other elements */}
        <nav>
          <ul>
            {NavigationURLs.map(({ item, linkTo, _ }) => {
              return (
                <li key={`${item}-key`}>
                  <NavLink to={linkTo}>{item}</NavLink>
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
