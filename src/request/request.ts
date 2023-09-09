import axios from 'axios'
export default function request(config:any) {
  const instance = axios.create({
    baseURL: 'http://182.254.242.96:3333',
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'authorization': localStorage.getItem('token')
    },
    data:config.data,
    method:config.method
  })
  axios.interceptors.response.use(
    response => {
      if (response.data.errno === 999) {
        console.log("token过期");
      }
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  )
  return instance(config)
}