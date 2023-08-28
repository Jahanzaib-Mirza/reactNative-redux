import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST } from "./constants";

const addToCart=(item)=>{
    return{
        type:ADD_TO_CART,
        data:item
    }
}
const removeFromCart=(item)=>{
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}

const getUserList=()=>{
    return{
        type:USER_LIST
    }
}

export  {addToCart,removeFromCart,getUserList}