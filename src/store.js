import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// storeの作成
export default function createFinalStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}