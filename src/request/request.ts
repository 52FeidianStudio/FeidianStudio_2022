import axios from 'axios'
export default function request(config:any) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:9000',
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'authorization': localStorage.getItem('token')
    },
    method:'POST'
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