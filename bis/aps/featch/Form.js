import Button from "./Button"

const Form = ({reqType, setReqtype}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Button buttonText="users"
        reqType={reqType}
        setReqtype={setReqtype}/>
        <Button buttonText="posts"
        reqType={reqType}
        setReqtype={setReqtype}/>
        <Button buttonText="comments"
        reqType={reqType}
        setReqtype={setReqtype}/>
    </form>
  )
}

export default Form