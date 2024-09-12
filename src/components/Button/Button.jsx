import './Button.scss'
function Button(buttonClassName, buttonTextClassName, onClick) {

    return (
      <>
        <button className={`button ${buttonClassName}`} onClick={onClick}>
            <p className={`button_text ${buttonTextClassName}`}>Hello!</p>
        </button>
      </>
    )
  }
  
  export default Button 