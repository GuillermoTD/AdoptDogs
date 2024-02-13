import {INCREMENT,DECREMENT,RESET} from "../actions/counterTypes"


export const incrementarCounter = ()=>{
    console.log("prueba de funcion para incrementar")
    return{
        type:INCREMENT
    }
}
export const decrementarCounter = ()=>{
    return{
        type:DECREMENT
    }
}
export const resetCounter = ()=>{
    return{
        type:RESET
    }
}