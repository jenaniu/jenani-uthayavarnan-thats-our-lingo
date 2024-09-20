import Button from '../Button/Button'
import './Modal.scss'

function Modal({ modalHeader, modalText, closeModal }) {

  const onClick = () => {
    closeModal();
  }
    return (
      <>
        <figure className='modal'>
            <h1>{modalHeader}</h1>
            <p>{modalText}</p>
            <Button buttonClassName="modal__close" buttonTextClassName="modal__close--text" buttonText="Close" onClick={onClick} />
        </figure>
      </>
    )
  }
  
  export default Modal