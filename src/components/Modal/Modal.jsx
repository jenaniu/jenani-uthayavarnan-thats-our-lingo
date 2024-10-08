import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button'
import './Modal.scss'


function Modal({ modalHeader, modalText, buttonText, onClick }) {

  const navigate = useNavigate();

  
  return (
    <>
      <div className='modal__overlay'>
        <figure className="modal__container">
          <h1 className="modal__header">{modalHeader}</h1>
          <h3 className="modal__text">{modalText}</h3>
          <Button buttonClassName="modal__close" buttonTextClassName="modal__close--text" buttonText={buttonText} onClick={onClick} />
        </figure>
      </div>
    </>
  )
}

export default Modal