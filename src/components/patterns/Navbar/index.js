import NextLink from 'next/link';
import House from '../../../svg/House';
import Avatar from '../../../svg/Avatar';
import Portfolio from '../../../svg/Portfolio';
import Music from '../../../svg/Music';
import Contact from '../../../svg/Contact';
import Logo from '../../../images/Logo';

export default function Navbar() {
  return(
    <div className="flex box-border">
    <div class="mob-header fixed right-5 top-4 z-50 hidden lg:block">
      <button className="toggler-menu cursor-none w-11 h-11 relative rounded-full p-0 bg-black border-none ml-auto">
        <div className="menu-hamb">
          <span className="first:-top-4 absolute left-0 bottom-0 right-0 w-6 h-0.5 m-auto bg-white text-white transition duration-150"></span>
          <span className="even:-top-px absolute left-0 bottom-0 right-0 w-6 h-0.5 m-auto bg-white text-white transition duration-150"></span>
          <span className="last:top-auto absolute left-0 bottom-3 right-0 w-6 h-0.5 m-auto bg-white text-white transition duration-150"></span>

        </div>
      </button>
    </div>
    <div className="inner-navbar bg-transparent flex items-center justify-between w-full px-10 h-20
          lg:px-5 lg:w-80 lg:h-screen lg:fixed lg:top-0 lg:left-0 lg:bg-slate-100 lg:clear-both lg:pt-8
          lg:pr-5 lg:pb-5 lg:shadow-indigo-500/40 lg:z-50 lg:transition-all lg:ease-in-out lg:duration-5000
          lg:flex lg:flex-col">
      <div className="avatar-img flex items-center">
        <img className="rounded-full max-h-20"
              src="https://avatars.githubusercontent.com/u/31221444?v=4">
        </img>
      </div>

      <div className="navbar text-slate-600 h-auto font-medium font-sans
       lg:w-full lg:flex lg:justify-start lg:h-3/4 lg:border-b-2 lg:border-cyan-400 lg:z-50">
        <ul className="anchor-nav flex items-center
          lg:items-baseline lg:flex-col lg:text-gray-800 lg: align-baseline lg:fixed lg:bottom-0
          lg:top-44 lg:w-1/3">
          <li className="list_inner py-2 px-2">
            <a className="flex items-center text-base py-3 px-2.5 leading-none border rounded border-none hover:border-transparent hover:bg-slate-100 inset-x-0 inset-y-0"
             href="/"><House/>Home</a>
          </li>
          <li class="list_inner py-2 px-2">
            <a className="flex items-center text-base py-3 px-2.5 leading-none border rounded border-none hover:border-transparent hover:bg-slate-100 inset-x-0 inset-y-0" href="/about"><Avatar/>About</a>
          </li>
          <li class="list_inner py-2 px-2">
            <a className="flex items-center text-base py-3 px-2.5 leading-none border rounded border-none hover:border-transparent hover:bg-slate-100 inset-x-0 inset-y-0" href="/projects"><Portfolio/>Projects</a>
          </li>
          <li class="list_inner py-2 px-2">
            <a className="flex items-center text-base py-3 px-2.5 leading-none border rounded border-none hover:border-transparent hover:bg-slate-100 inset-x-0 inset-y-0" href="/music"><Music/>Music</a>
          </li>
          <li class="list_inner py-2 px-2">
            <a className="flex items-center text-base py-3 px-2.5 leading-none border rounded border-none hover:border-transparent hover:bg-slate-100 inset-x-0 inset-y-0" href="/music"><Contact/>Contact</a>
          </li>
        </ul>

      </div>
    </div>
  </div>
  )
}
