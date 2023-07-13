import Typical from "react-typical";
import About from "../About";

export default function Home() {
  return (
    <div
      className="home w-full bg-tea-creme/60 min-h-screen relative flex items-center
      justify-center text-center rounded-xl shadow-sm"
      id="home"
    >
      <div className="content-main py-24 px-5 flex flex-col w-2/4">
        <div class="img-home flex justify-center items-center ">
          <img
            src="https://avatars.githubusercontent.com/u/31221444?v=4"
            className="rounded-full h-72 w-72 max-w-full shadow-lg"
          ></img>
        </div>
        <div className="info-content flex flex-col mt-4 shadow-sm">
          <h5 className="text-zinc-400 text-oxford-blue/90 font-bold text-2xl tracking-wider mt-4">
            Hi, Im Thayana Classo
          </h5>
          <strong className="bg-gray-100 tracking-wider px-1 rounded-md w-52 text-xl bg-fern-green/10 text-fern-green m-0 m-auto py-2 mt-2">
            <Typical
              steps={["Front-End", 2000, "Developer", 2000]}
              wrapper="p"
              loop={Infinity}
            />
          </strong>
          <p className="w-4/6 m-0 m-auto description my-4 text-jet/40 font-bold tracking-wider">
            I'm a Front-end React Developer based In Brazil, over 3 years of
            professional experience.
          </p>
        </div>
      </div>
    </div>
  );
}
