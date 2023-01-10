/* eslint-disable react/prop-types */
import './Modal.css';

const Modal = ({ modalFunction, message }) => (
  <div className="modal-container">
    <div className="modal">
      <header className="modal__header">
        <button
          className="modal__close"
          type="button"
          onClick={() => modalFunction(false)}
        >
          x
        </button>

      </header>
      <p className="modal__copy">{message}</p>
    </div>
  </div>
);

export default Modal;
