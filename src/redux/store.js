import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { CategoriesReducer } from './reducer/CategoriesReducer';
import {ShoppingCartReducer} from './reducer/ShoppingCartReducer';
import { ifNull } from './middlewares/ifNull';
import SelectedProductReducer from './reducer/SelectedProductReducer';

const rootReducer = combineReducers({
    Category: CategoriesReducer,
    ShoppingCart: ShoppingCartReducer,
    SelectedProduct: SelectedProductReducer, 
});

export const store = createStore(
    rootReducer,
    applyMiddleware(ifNull, logger) // ifNull קודם, ואז logger אחרון

);

console.log(store.getState());
