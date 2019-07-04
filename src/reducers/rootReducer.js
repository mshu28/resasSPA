import { combineReducers } from 'redux';
import prefectureReducer from './prefectureReducer';
import populationReducer from './populationReducer';

const rootReducer = combineReducers({
    prefectureReducer
    // populationReducer
});

export default rootReducer;
