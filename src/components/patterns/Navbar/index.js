import NextLink from 'next/link';
import House from '../../../svg/House';
import Avatar from '../../../svg/Avatar';
import Portfolio from '../../../svg/Portfolio';
import Music from '../../../svg/Music';
import Contact from '../../../svg/Contact';

export default function Navbar() {
  return(
    // <div class="mob-header"></div>
    <div className="flex">
    <div className="inner-navbar bg-transparent flex items-center justify-between w-full px-10 h-20">
      <div className="avatar-img flex items-center">
        <img className="rounded-full max-h-20"
              src="https://avatars.githubusercontent.com/u/31221444?v=4">
        </img>
      </div>

      <div className="navbar text-slate-600 h-auto font-medium font-sans">
        <ul className="anchor-nav flex items-center">
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
