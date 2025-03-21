const Button = ({buttonText,reqType,setReqtype}) => {
  return (
    <button className={buttonText===reqType ? "selected" : null}
        type = "button"
        onClick={()=>setReqtype(buttonText)}
    >{buttonText}
    </button>
  )
}

export default Button