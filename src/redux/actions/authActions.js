export const loginAction = (data)=>{
    return{
        type:"LOGIN",
        payload:{
            userData:data
        }
    }
}



export const logoutAction = ()=>{
    return{
        type:"LOGOUT",
        isLogged:false
    }
}