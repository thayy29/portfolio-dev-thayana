import { useEffect, useRef, useState } from "react";
import Modal from "../../Modal";
import ProgressBar from "./ProgressBar";

export default function About() {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();

  // Detectar o click
  useEffect(() => {
    function handler(event) {
      console.log(event, "clicked somewhere");
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  });

  // Detectar se o click foi fora da janela
  useEffect(() => {
    function handler(event) {
      if (!modalRef.current?.contains(event.target)) {
        console.log("clicked outside of modal");
      }
      // setOpenModal(false);
    }

    window.addEventListener("click", handler);

    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="box w-full h-screen">
      <div className="inner bg-slate-100 px-14 py-14">
        <h1 className="text-3xl font-extrabold mb-8">About me</h1>

        <div className="box flex lg:flex-col mx-0 m-auto">
          <div className="left-content flex-1 mr-8 flex-col">
            <p className="info-content my-4 tracking-wide text-lg text-oxford-blue px-1.5">
              Hi, Im{" "}
              <strong className="bold-name text-lg">Thayana Classo</strong>{" "}
              <span className="block pt-4">
                Im a Front-end Developer with over 3 years of experience. Im
                from Brazil, Rio de Janeiro. I code and create web elements for
                amazing people around the world. I like work with new people.
              </span>
            </p>
            <div className="box-skill mt-14 my-4 tracking-wide text-lg text-oxford-blue px-1.5">
              <h3 className="text-xl font-extrabold">
                What is my skill level?
              </h3>
              <p className="info my-1 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ipsum sit nibh amet egestas tellus.
              </p>

              {/* Progress bar */}
              <div className="mt-10 bg-fern-green/10 shadow-md p-10 rounded-md flex-col">
                <ProgressBar />

                <div className="btn-see-more cursor-pointer">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="btn-download  text-fern-green tracking-wid hover:bg-tea-creme font-bold p-3 px-6 border-2 border-fern-green/50 bg-fern-green/20 shadow-md rounded-full
                  "
                  >
                    See More
                  </button>

                  {openModal && (
                    <div
                      className="modal-see-more overlay"
                      id="modal"
                      ref={modalRef}
                    >
                      <Modal onClose={() => setOpenModal(false)} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="right-content flex-1">
            <div className="info-content my-4 py-4">
              <img
                className="dev-img rounded-md shadow-xl"
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
