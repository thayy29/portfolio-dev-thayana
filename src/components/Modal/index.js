export default function Modal({ onClose }) {
  return (
    <div className="modal bg-tea-creme absolute">
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

        <div class="close-container">
          {/* <div class="leftright"></div>
          <div class="rightleft"></div> */}
          <button
            class="close leftright"
            onClick={onClose}
            onFocus={onClose}
          ></button>
          <button
            class="close rightleft"
            onClick={onClose}
            onFocus={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}
