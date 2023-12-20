import axios, {AxiosInstance} from "axios";


const instance:AxiosInstance= axios.create();

instance.interceptors.request.use(
    (config)=>{
        console.log('interceptor')
        return config;
    },
    (error)=>{return Promise.reject(error)}
);

export default instance;