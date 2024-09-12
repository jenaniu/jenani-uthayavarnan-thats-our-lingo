import './Button.scss'
function Button({ buttonClassName, buttonTextClassName, buttonText, onClick }) {

    return (
      <>
        <button className={`button ${buttonClassName}`} onClick={onClick}>
            <span className={`button_text ${buttonTextClassName}`}> {buttonText} </span>
        </button>
      </>
    )
  }
  
  export default Button 