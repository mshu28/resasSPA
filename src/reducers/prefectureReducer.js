import { ActionTypes } from '../constants';


const defaultState = {
    result: [],
    pending: false,
  };

const prefectureReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ActionTypes.GET_PREFECTURE:
        return {
          result: null,
        };
      case ActionTypes.GET_PREFECTURE_OK:
        return {
          result: action.prefectureList.result,
        };
      case ActionTypes.GET_PREFECTURE_NG:
        return {
          result: action.data,
        };
      default:
        return state;
    }
  };
  
  export default prefectureReducer;
