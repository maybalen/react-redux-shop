import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

// Link & Combine All Reducers List here
const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default reducers;