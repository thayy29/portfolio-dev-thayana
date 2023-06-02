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
        <div className="extra-text flex flex-col">
          <h5 className="text-zinc-800">Hello, Im Thayana Classo</h5>
          <h1 className="job-area">Front-end Developer</h1>
          <p>
            I'm a Front-end React Developer based In Brazil, over 3 years of
            professional experience.
          </p>
        </div>
        {/* <h1>Essa é a home</h1> */}
      </div>
    </div>
  );
}
