import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 export const axiosSecure=axios.create({
    baseURL:'https://bisrto-boss-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate=useNavigate()
    const{logOut}=useAuth()
    // request interceptors to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function(config){
        const token =localStorage.getItem('access-token')
        // console.log('request stopped by interceptors',token)
        config.headers.authorization = `Bearer ${token}`
        return config
    },function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });

// Add a response interceptor 401 and 403
axiosSecure.interceptors.response.use(function (response) {
    
    return response;
  }, async (error)=> {
    const status =error.response.status
// console.log('status error in the interceptors',status)
if(status === 401|| status=== 403){
navigate('/login')
}
await logOut()
    return Promise.reject(error);
  });




    return axiosSecure
};

export default useAxiosSecure;