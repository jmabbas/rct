const apiRequest = async (url= 'http://localhost:3500/', optionsObj= null, errMsg=null) => {
    try {
        const response = await fetch(url,optionsObj)
        if(!response.ok) throw Error ("Please reload the app")
    }catch(err) {
        errMsg = err.Message;
    }finally {
        return errMsg  
    }
}

export default apiRequest