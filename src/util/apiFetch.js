import config from '../envConfig';
import produce from 'immer';
import moment from 'moment';
import { delay, race, call, put, all } from 'redux-saga/effects';
import {userSignOutSuccess} from 'actions/Auth';

const headers={
  'Accept':'application/json',
  'Content-Type': 'application/json' 
};

const headersUpload={
  'Accept':'application/json, application/xml, text/plain, text/html, *.*',
  'Content-Type': 'multipart/form-data, application/x-www-form-urlencoded;charset=utf-8' 
};

export const toSemicolonQuery = obj =>{
  if(obj!==null && obj !==undefined){
    Object.keys(obj)
    .reduce((prev, current) => [...prev, `${current}=${encodeURIComponent(obj[current])}`], [])
    .join(';');
  }
}
  

export function* getErrorRequest(response){
  let message = '';
  let error = false;
  if(response.status!==200){
    error=true;
    const respTxt=response.status!==404 ? yield response.text():response.statusText;
    const obj=response.status!==404 ? JSON.parse(respTxt):{};
    message=response.status!==404 ? obj.message :respTxt;
    if(response.status==400 && message===undefined){
     message="Bad request";
    }
  }
  return error ? { error, message} : { error: false };
}

  export function* postRequest(url,payload){
    const requestURL=config.enviroment.urlApi + url;
    if(url!=='token'){
      const userSession = localStorage.getItem('userSession');
      if(userSession){
        const userObj=JSON.parse(userSession);
        if(userObj.token){
          headers.Authorization=userObj.token;
        }
      }
    }
    const response= yield call(fetch,requestURL,{
      method:'POST',
      headers: headers,
                  //'Access-Control-Allow-Origin': '*',
                  //'Access-Control-Allow-Headers' : 'Origin, Content-Type,  X-Requested-With, Accept'},
      body: JSON.stringify(payload)
    });
    if(response.status===401){
      localStorage.removeItem('user_id');
      localStorage.removeItem('userSession');
      yield put(userSignOutSuccess(undefined));
    }else{
      return response;
    }
  }


  export function* getRequest(url,payload){
    const requestURL=config.enviroment.urlApi + url;
    if(url!=='token'){
      const userSession = localStorage.getItem('userSession');
      if(userSession){
        const userObj=JSON.parse(userSession);
        if(userObj.token){
          headers.Authorization=userObj.token;
        }
      }
    }

    const response= yield call(fetch,requestURL,{
      method:'GET',
      headers: headers,
                  //'Access-Control-Allow-Origin': '*',
                  //'Access-Control-Allow-Headers' : 'Origin, Content-Type,  X-Requested-With, Accept'},
    });
    if(response.status===401){
      localStorage.removeItem('user_id');
      localStorage.removeItem('userSession');
      yield put(userSignOutSuccess(undefined));
    }else{
      return response;
    }
  }

  export function* putRequest(url,payload){
    const requestURL=config.enviroment.urlApi + url;
    if(url!=='token'){
      const userSession = localStorage.getItem('userSession');
      if(userSession){
        const userObj=JSON.parse(userSession);
        if(userObj.token){
          headers.Authorization=userObj.token;
        }
      }
    }
    const response= yield call(fetch,requestURL,{
      method:'PUT',
      headers: headers,
                  //'Access-Control-Allow-Origin': '*',
                  //'Access-Control-Allow-Headers' : 'Origin, Content-Type,  X-Requested-With, Accept'},
      body: JSON.stringify(payload)
    });

    if(response.status===401){
      localStorage.removeItem('user_id');
      localStorage.removeItem('userSession');
      yield put(userSignOutSuccess(undefined));
    }else{
      return response;
    }
  }

  export function* uploadFilesRequest(url,payload){
    const requestURL=config.enviroment.urlApi + url;
    const newHeader={};
    if(url!=='token'){
      const userSession = localStorage.getItem('userSession');
      if(userSession){
        const userObj=JSON.parse(userSession);
        if(userObj.token){
          newHeader.Authorization=userObj.token;
        }
      }
    }
    const response= yield call(fetch,requestURL,{
      method:'POST',
      headers: newHeader,
                  //'Access-Control-Allow-Origin': '*',
                  //'Access-Control-Allow-Headers' : 'Origin, Content-Type,  X-Requested-With, Accept'},
      body:  payload
    });

    if(response.status===401){
      localStorage.removeItem('user_id');
      localStorage.removeItem('userSession');
      yield put(userSignOutSuccess(undefined));
    }else{
      return response;
    }
  }

  export function* deleteRequest(url,payload){
    const requestURL=config.enviroment.urlApi + url;
    if(url!=='token'){
      const userSession = localStorage.getItem('userSession');
      if(userSession){
        const userObj=JSON.parse(userSession);
        if(userObj.token){
          headers.Authorization=userObj.token;
        }
      }
    }

    const response= yield call(fetch,requestURL,{
      method:'DELETE',
      headers: headers,
                  //'Access-Control-Allow-Origin': '*',
                  //'Access-Control-Allow-Headers' : 'Origin, Content-Type,  X-Requested-With, Accept'},
    });
    if(response.status===401){
      localStorage.removeItem('user_id');
      localStorage.removeItem('userSession');
      yield put(userSignOutSuccess(undefined));
    }else{
      return response;
    }
  }



export const objectToQueryString = obj =>
  [
    ...Object.keys(obj).map(k =>
      Array.isArray(obj[k])
        ? obj[k].map(o => `${encodeURIComponent(k)}[]=${encodeURIComponent(o)}`).join('&')
        : `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`
    )
  ].join('&');

