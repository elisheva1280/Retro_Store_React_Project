import { MUSIC,JUDAICA,FURNITURE,EARTHENWARE,WATCHES,ADDSHOPPINGCART,REMOVESHOPPINGCART, 
    SELECTEDPRODUCT,ADDCOUNT,ADDPRICE,REMOVECOUNT,REMOVEPRICE,SEARCH} from "./actionType"

export const music = () => ({
    type: MUSIC,
})


// export const cars = () => ({
//     type: CARS,
   
// })

export const Judaica = () => ({
    type: JUDAICA,
   
})
export const Furniture = () => ({
    type: FURNITURE,
   
})
export const Earthenware = () => ({
    type: EARTHENWARE,
   
})
export const Watches = () => ({
    type: WATCHES,
   
})
export const AddShoppingCart=(item)=>({
    type: ADDSHOPPINGCART,
    payload:item,
})
export const RemoveShoppingCart=(item)=>({
    type: REMOVESHOPPINGCART,
    payload:item,
})
export const SelectedProduct=(item)=>({
    type: SELECTEDPRODUCT,
    payload:item,
})
export const AddCount=()=>({
    type:ADDCOUNT,
})
export const AddPrice=(price)=>({
    type:ADDPRICE,
    payload:price,
})
export const RemoveCount=()=>({
    type:REMOVECOUNT,
})
export const RemovePrice=(price)=>({
    type:REMOVEPRICE,
    payload:price,
})
export const Search = (name) => {
    console.log("Dispatching Search Action with payload:", name);
    return {
        type: SEARCH,
        payload: name,
    };
};