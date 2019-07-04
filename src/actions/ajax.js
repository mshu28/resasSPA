import axios from 'axios';
import {config} from '../config';

// Ajax basic setup
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.common['X-API-KEY'] = config.API_KEY;

export function ajax(params){
  let method = 'GET';
  if (params.type){
    method = params.type;
  }
  return axios({
    url: config.API_URL + params.url,
    method: method,
    data: params.data
  });
}
