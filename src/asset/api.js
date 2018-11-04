import axios from 'axios'

const BASE_API = 'http://api.portal-api.cyt-rain.cn/';

const api = {
  get(path, params) {
    return axios.get(`${BASE_API}${path}`,{params:params}).then(res => {
      if(res.data.success){
        return Promise.resolve(res.data.info);
      }else{
        return Promise.reject(res.data.info);
      }
    }).catch(err => {
      return Promise.reject(err.response.data.message);
    })
  },
  post(path, params) {
    return axios.post(`${BASE_API}${path}`,params).then(res => {
      if(res.data.success){
        return Promise.resolve(res.data.info);
      }else{
        return Promise.reject(res.data.info);
      }
    }).catch(err => {
      console.log(err)
      return Promise.reject(err.response.data.message);
    })
  }
}
export default api;