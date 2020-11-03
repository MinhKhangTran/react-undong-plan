import React from "react";
import { navbar } from "../assets/data";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <nav className="bg-teal-500">
      <div className="md:w-2/3 w-11/12 mx-auto overflow-hidden md:flex md:justify-between ">
        <div className="flex justify-between items-center text-2xl text-teal-100 font-mono">
          <h1>Undong Tracking</h1>
          <button
            className="md:hidden"
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
          >
            <FaBars></FaBars>
          </button>
        </div>
        <div
          className={`${
            toggleNav
              ? "h-auto transition transition-all duration-300 ease-in-out text-xl text-teal-200 hover:text-teal-100 md:w-1/2 md:h-full"
              : "h-0 transition transition-all duration-300 ease-in-out text-xl text-teal-200 hover:text-teal-100 md:w-1/2 md:h-full"
          }`}
        >
          <ul className="md:flex md:flex-row  md:justify-between md:items-center">
            {navbar.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="my-2" key={id}>
                  <a className="capitalize" href={url}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
