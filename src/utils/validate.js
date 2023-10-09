export const checkvaliddata=(email,password,name,isSignInForm)=>{
    const isemailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const ispasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isname=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if(!isemailValid){
        return "Email id is not valid"
    }
    if(!ispasswordValid){
        return "Password is not valid"
    }
    if(!isSignInForm && !isname){
        return "Name is not valid"
    }
    return null;

}