import { SELECTEDPRODUCT } from "../actionType";
const initialState = {
    selected: null,
  };
  
  const SelectedProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SELECTEDPRODUCT":
        return { ...state, selected: action.payload };
      default:
        return state;
    }
  };
  
  export default SelectedProductReducer;
  