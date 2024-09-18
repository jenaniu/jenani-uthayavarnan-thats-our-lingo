import './Button.scss'
function Button({ buttonClassName, buttonTextClassName, buttonText, onClick, disabled }) {

    return (
      <>
        <button className={`button ${buttonClassName}`} onClick={onClick} disabled={disabled}>
            <span className={`button_text ${buttonTextClassName}`}> {buttonText} </span>
        </button>
      </>
    )
  }
  
  export default Button 