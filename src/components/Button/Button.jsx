import './Button.scss'
function Button({ buttonClassName, buttonTextClassName, buttonText, onClick, disabled }) {

    return (
      <>
        <button className={`button ${buttonClassName}`} onClick={onClick} disabled={disabled}>
            <h3 className={`button_text ${buttonTextClassName}`}> {buttonText} </h3>
        </button>
      </>
    )
  }
  
  export default Button 