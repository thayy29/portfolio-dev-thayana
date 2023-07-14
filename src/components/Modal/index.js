export default function Modal({ onClose }) {
  return (
    <div className="modal bg-tea-creme/90 relative -top-96 left-1/2 bottom-1/2 border-2 rounded-md p-6 border-fern-green">
      <div className="content-modal">
        <div className="wrapper-modal flex align-middle justify-between">
          <div className="left-box-modal">
            <h3 className="font-bold">Personal Info</h3>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div className="right-box-modal">
            <h3 className="font-bold">Personal Info</h3>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
        </div>

        <button
          className="btn-close font-bold bottom-0 absolute right-1/2 p-1 rounded-full border-fern-green"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
