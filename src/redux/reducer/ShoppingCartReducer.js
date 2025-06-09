import { ADDCOUNT, ADDPRICE, ADDSHOPPINGCART,REMOVECOUNT,REMOVEPRICE,REMOVESHOPPINGCART } from "../actionType";
const initialState={
   ShoppingCartArr: [],
   count:0,
   price:0,
};
export const ShoppingCartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADDSHOPPINGCART:
            action.payload.ifExist=false;
             return {...state,ShoppingCartArr:[...state.ShoppingCartArr,action.payload]}
        case REMOVESHOPPINGCART:
            action.payload.ifExist=true;
            const newarr1=state.ShoppingCartArr.filter(item =>{return item.name!==action.payload.name});
            return{...state,ShoppingCartArr:newarr1};  
        case ADDCOUNT:
            return {...state,count:state.count+1};
        case REMOVECOUNT:
            return {...state,count:state.count-1};
        case ADDPRICE:
            return {...state,price:state.price+action.payload.price};
        case REMOVEPRICE:
            return{...state,price:state.price-action.payload.price}; 
        default:
            return state;
    }
}
