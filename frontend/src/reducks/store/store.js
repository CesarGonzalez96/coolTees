import { createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { ItemsReducer } from '../items/reducers';
import { CartsReducer } from '../carts/reducers';
import { UserReducer } from '../users/reducers';
import { OrderReducer } from '../order/reducers'

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers(
            {
                router: connectRouter(history),
                items: ItemsReducer,
                users: UserReducer,
                carts: CartsReducer,
                orders: OrderReducer,
                
            }
        ),
        compose(
            applyMiddleware(routerMiddleware(history), thunk)   
        )
    );
}