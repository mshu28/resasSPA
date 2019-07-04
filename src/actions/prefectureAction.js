import { ActionTypes } from '../constants';
import Promise from 'bluebird';
import { ajax } from './ajax';
import { config } from '../config';

export function getPrefectureList(){
  return (dispatch) => {
    dispatch({
      type: ActionTypes.GET_PREFECTURE
    });
    const params = {
      url: config.PREFECTURE_URL,
    }
    
    return new Promise((resolve, reject) => {
      ajax(params)
      .then((response) => {
        if (response.status === 200){
          dispatch({
            type: ActionTypes.GET_PREFECTURE_OK,
            prefectureList: response.data
          });
          resolve();
        } else {
          dispatch({
            type: ActionTypes.GET_PREFECTURE_NG
          });
          reject();
        }
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.GET_PREFECTURE_NG
        });
        reject();
      });
    });
  };
};