import React, { useEffect } from "react";
import House from "../../../svg/House";
import Avatar from "../../../svg/Avatar";
import Portfolio from "../../../svg/Portfolio";
import Music from "../../../svg/Music";
import Contact from "../../../svg/Contact";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="home-light">
      <header
        className="header-area none fixed w-full left-0 top-0 bg-slate-100 z-50 shadow-sm
      lg:block"
      >
        <div className="header-inner w-2/4 max-w-6xl py-0 px-3">
          <div className="logo">
            <a
              href="/"
              className="transition-all duration-3000 ease-in-out cursor-pointer"
            >
              {" "}
              <img
                className="rounded-full border-2 border-slate-300 max-h-20 lg:max-h-20 lg:border-2 lg:border-slate-300 max-w-xs"
                src="https://avatars.githubusercontent.com/u/31221444?v=4"
              ></img>
            </a>
          </div>
        </div>
        <nav className="navbar">
          <section className="mobile-menu hidden lg:h-0 lg:flex lg:w-40 ">
            <div
              className="hamb-icon space-y-2 absolute top-3 right-10 bg-slate-950 p-3 h-14 rounded-full"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="block mt-1 h-0.5 w-8 animate-pulse bg-gray-500"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-400"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
            </div>
            <div className={isMenuOpen ? "isOpened" : "isClosed"}>
              <div class="wrapper-mob lg:bg-slate-300 lg:w-80 lg:h-screen lg:rounded-e-xl lg:shadow-inner">
                <ul
                  className="items-menu-mob flex flex-col items-center justify-between min-h-[250px]
                lg:pt-12 lg:h-96 lg:justify-evenly
                "
                >
                  <li className="lg:text-gray-700">
                    <a href="/home">Home</a>
                  </li>
                  <li className="lg:text-gray-700">
                    <a href="/about">About</a>
                  </li>
                  <li className="lg:text-gray-700">
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li className="lg:text-gray-700">
                    <a href="/music">Music</a>
                  </li>
                  <li className="lg:text-gray-700">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="desktop-menu lg:hidden absolute top-7 right-0">
            <ul className="items-menu-desk lg:hidden flex justify-around w-2/4 px-4 rounded-md">
              <li className="mr-8 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md">
                <House /> <a href="/home">Home</a>
              </li>
              <li className="mr-8 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md">
                <Avatar /> <a href="/about">About</a>
              </li>
              <li className="mr-8 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md">
                <Portfolio /> <a href="/portfolio">Portfolio</a>
              </li>
              <li className="mr-8 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md">
                <Music /> <a href="/music">Music</a>
              </li>
              <li className="mr-8 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md">
                <Contact /> <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <style>{`
      .isOpened {
        visibility: visible;
      }
     .isClosed {
        visibility: hidden;
      }
    `}</style>
      </header>
    </div>
  );
}
