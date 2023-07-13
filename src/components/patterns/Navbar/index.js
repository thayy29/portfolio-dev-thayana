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
        className="header-area none fixed w-full left-0 top-0 bg-tea-creme/40 z-50 shadow-sm
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
                className="rounded-full shadow-xl max-h-20 lg:max-h-20 max-w-xs"
                src="https://avatars.githubusercontent.com/u/31221444?v=4"
              ></img>
            </a>
          </div>
        </div>
        <nav className="navbar">
          <section className="mobile-menu hidden lg:h-0 lg:flex lg:w-40 ">
            <div
              className="hamb-icon space-y-2 shadow-lg absolute top-3 right-10 bg-oxford-blue p-3 h-14 rounded-full"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="block mt-1 h-0.5 w-8 animate-pulse bg-tea-creme"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-tea-creme"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-tea-creme"></span>
            </div>
            <div className={isMenuOpen ? "isOpened" : "isClosed"}>
              <div class="wrapper-mob lg:shadow-xl lg:bg-fern-green/50 lg:w-56 lg:h-screen lg:rounded-e-xl">
                <ul
                  className="items-menu-mob flex flex-col items-center justify-between min-h-[250px]
                lg:pt-12 lg:h-96 lg:justify-evenly
                "
                >
                  <li className="lg:text-oxford-blue tracking-widest font-semibold">
                    <a href="/home">Home</a>
                  </li>
                  <li className="lg:text-tea-creme tracking-widest">
                    <a href="/about">About</a>
                  </li>
                  <li className="lg:text-tea-creme tracking-widest">
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li className="lg:text-tea-creme tracking-widest">
                    <a href="/music">Music</a>
                  </li>
                  <li className="lg:text-tea-creme tracking-widest">
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="desktop-menu lg:hidden absolute top-7 right-0">
            <ul className="items-menu-desk lg:hidden flex justify-around w-2/4 px-4 rounded-md">
              <li className="mr-4 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md text-fern-green font-bold tracking-widest">
                <House /> <a href="/home">Home</a>
              </li>
              <li className="mr-4 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md text-oxford-blue font-bold tracking-widest">
                <Avatar /> <a href="/about">About</a>
              </li>
              <li className="mr-4 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md text-oxford-blue font-bold tracking-widest">
                <Portfolio /> <a href="/portfolio">Portfolio</a>
              </li>
              <li className="mr-4 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md text-oxford-blue font-bold tracking-widest">
                <Music /> <a href="/music">Music</a>
              </li>
              <li className="mr-4 flex bg-slate-700/[.06] px-4 py-1.5 rounded-md text-oxford-blue font-bold tracking-widest">
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
