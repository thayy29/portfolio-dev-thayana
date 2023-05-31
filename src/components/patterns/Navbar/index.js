import React, { useEffect } from "react";
import House from "../../../svg/House";
import Avatar from "../../../svg/Avatar";
import Portfolio from "../../../svg/Portfolio";
import Music from "../../../svg/Music";
import Contact from "../../../svg/Contact";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  console.log(size, "size");
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      console.log(menuOpen, "menuOpen");
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  function handleClick(event) {
    event.preventDefault();
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  return (
    <div className="home-light">
      <header
        className="header-area none fixed w-full left-0 top-0 bg-white z-50 shadow-slate-950
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
                className="rounded-full max-h-20 lg:max-h-28 lg:border-2 lg:border-slate-800 max-w-xs"
                src="https://avatars.githubusercontent.com/u/31221444?v=4"
              ></img>
            </a>
          </div>
        </div>
      </header>
      <div className="horizontal-menu">
        <div
          className="mob-header none fixed right-5 top-4 z-50 hidden lg:shadow-slate-900
        lg-z-50 lg:block lg:fixed lg:right-5 lg:top-3 lg:z-50"
        >
          <button
            onClick={handleClick}
            className="toggler-menu cursor-none w-11 h-11 relative rounded-full p-0
       bg-black border-none ml-auto"
          >
            <div className="menu-hamb">
              <span className="first:-top-4 absolute left-0 bottom-0 right-0 w-6 h-0.5 m-auto bg-white text-white transition duration-150"></span>
              <span className="even:-top-px absolute left-0 bottom-0 right-0 w-6 h-0.5 m-auto bg-white text-white transition duration-150"></span>
              <span className="last:top-auto absolute left-0 bottom-3 right-0 w-6 h-0.5 m-auto bg-white text-white transition duration-150"></span>
            </div>
          </button>
        </div>
        <div
          className="sidebar h-auto flex justify-end w-full static bg-transparent
          lg:w-80 lg:fixed lg:top-0 lg:left-0 lg:bg-slate-600 lg:z-100 lg:transition-all
          lg:duration-3000 lg:ease-in-out lg:h-screen"
        >
          <div
            class="sidebar-inner h-20 flex items-center justify-between py-0 lg:flex-col
          "
          >
            <div className="menu z-50 h-auto p-0 w-full">
              <div
                className="list text-slate-600 h-auto font-medium font-sans"
                data-nav="list"
              >
                <ul className="anchor-nav flex items-center justify-center m-0">
                  <li className="w-auto float-none ml-1">
                    <div className="list-inner">
                      <a
                        className="text-sm font-semibold justify-center py-1 px-5 flex items-end text-zinc-900
                       rounded-md relative transition-all duration-3000 ease-in-out lg:py-1 lg:px-3 lg:text-sm"
                        href="/"
                      >
                        <Avatar />
                        Avatar
                      </a>
                    </div>
                  </li>
                  <li className="w-auto float-none ml-1">
                    <div className="list-inner">
                      <a
                        className="text-sm font-semibold justify-center py-1 px-5 flex items-end text-zinc-900
                       rounded-md relative transition-all duration-3000 ease-in-out lg:py-1 lg:px-3 lg:text-sm"
                        href="/"
                      >
                        <House />
                        Home
                      </a>
                    </div>
                  </li>
                  <li className="w-auto float-none ml-1">
                    <div className="list-inner">
                      <a
                        className="text-sm font-semibold justify-center py-1 px-5 flex items-end text-zinc-900
                       rounded-md relative transition-all duration-3000 ease-in-out lg:py-1 lg:px-3 lg:text-sm"
                        href="/"
                      >
                        <Portfolio />
                        Portfolio
                      </a>
                    </div>
                  </li>
                  <li className="w-auto float-none ml-1">
                    <div className="list-inner">
                      <a
                        className="text-sm font-semibold justify-center py-1 px-5 flex items-end text-zinc-900
                       rounded-md relative transition-all duration-3000 ease-in-out lg:py-1 lg:px-3 lg:text-sm"
                        href="/"
                      >
                        <Music />
                        Music
                      </a>
                    </div>
                  </li>
                  <li className="w-auto float-none ml-1">
                    <div className="list-inner">
                      <a
                        className="text-sm font-semibold justify-center py-1 px-5 flex items-end text-zinc-900
                       rounded-md relative transition-all duration-3000 ease-in-out lg:py-1 lg:px-3 lg:text-sm"
                        href="/"
                      >
                        <Contact />
                        Contact
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
