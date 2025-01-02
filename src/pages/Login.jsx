
import { useContext, useEffect,  useState } from 'react';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Login = () => {
 
  const { signIn} =useContext(AuthContext)
  const [disable,setDisable]=useState(true)
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname || '/'
  console.log( 'state in the location',location.state)

   useEffect(()=>{
    loadCaptchaEnginge(6); 
   },[])
   const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'Login successfully',
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
        });
      });
  };

    const handleCaptcha=(e)=>{
const captcha_value = e.target.value
if(validateCaptcha(captcha_value)){
setDisable(false)
}


    
    }
    return (
     <>
           <Helmet>
        <title>Bistro|| Login</title>
      </Helmet>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-1/2 max-w-sm  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
            
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input  onBlur={handleCaptcha} type="text"  name='captcha' placeholder="text" className="input input-bordered" />
        
              </div>
              <div className="form-control mt-6">
        
                <input disabled={false} className="btn btn-primary" type="submit" value="login" />
              </div>
              <p>New Here? <Link to='/signup'> Go To Sign Up</Link> </p>
            </form>
            
          </div>
        </div>
      </div>
     </>
    );
};

export default Login;  