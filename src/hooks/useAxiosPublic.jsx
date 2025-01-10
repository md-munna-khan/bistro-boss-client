import axios from "axios";

export const axiosPublic=axios.create({
    baseURL:'https://bisrto-boss-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;