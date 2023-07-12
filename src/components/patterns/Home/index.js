export default function Home() {
  return (
    <div
      className="home w-full bg-slate-100 min-h-screen relative flex items-center
      justify-center text-center"
      id="home"
    >
      <div className="content py-24 px-5 flex flex-col w-2/4">
        <div class="img-home flex justify-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/31221444?v=4"
            className="rounded-full h-72 w-72 max-w-full border-2 border-slate-400"
          ></img>
        </div>
        <div className=" flex flex-col mt-4 ">
          {/* <h5 className="text-zinc-400 font-bold text-xl tracking-wider ">
            Hello, Im Thayana Classo
          </h5>
          <h1 className="job-area my-4 text-zinc-700 tracking-wide font-bold text-4xl">
            <br className="block md:hidden" /> Front-end Developer
          </h1> */}
          <h1 className="mb-1 font-mono text-4xl text-gray-500 md:text-6xl">
            Hi, I'm <br className="block md:hidden" />
            <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
              Thayana
            </span>
            <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
          </h1>

          <p>
            I'm a Front-end React Developer based In Brazil, over 3 years of
            professional experience.
          </p>
        </div>
        {/* <h1>Essa é a home</h1> */}
      </div>
      <style></style>
    </div>
  );
}
