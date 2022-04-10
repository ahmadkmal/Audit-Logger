import axios from "axios";

const instance = axios.create({
    baseURL: 'https://run.mocky.io/v3',
  });
  instance.interceptors.response.use(response => {
    return response;
 }, error => {
   if (error.response?.status === 401) {
    return error.response.data
   }
   return error.response;
 });
   instance.defaults.headers.post['Accept'] = 'application/json'
export default instance;