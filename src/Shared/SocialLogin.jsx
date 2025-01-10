import { FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { socialSignIn}=useAuth()
    const navigate=useNavigate()
    const axiosPublic=useAxiosPublic()
    const handleGoogleSignIn=()=>{
        socialSignIn()
        .then(result=>{
           const userInfo={
            name:result.user?.displayName,
            email:result.user?.email
           }
           axiosPublic.post('/users',userInfo)
           .then((res)=>{
            console.log(res.data)
            navigate('/')
           })
        })
    }
    return (
        <div>
           <button className="btn btn-outline" onClick={handleGoogleSignIn}> <FaGoogle>Goggle</FaGoogle></button>
        </div>
    );
};

export default SocialLogin;