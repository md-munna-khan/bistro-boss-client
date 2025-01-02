
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const {createUser, updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
    reset,
        formState: { errors },
      } =useForm()
      const onSubmit = (data) => {
        console.log(data)
        createUser(data.email,data.password)
  
        .then(result=> {
            const user = result.user
            console.log(user)
            updateUserProfile(data.name,data.photo)
            .then(()=>{
                console.log('user profile info updated')
                reset()
            })
            navigate('/')
        })
      }
      

    return (
      <>
            <Helmet>
        <title>Bistro|| Sign up</title>
      </Helmet>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)  } className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} placeholder="name" className="input input-bordered"  />
                {errors.name && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text"  {...register("photo", { required: true })} placeholder="Photo" className="input input-bordered"  />
                {errors.Photo && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label"> 
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email", { required: true })}placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-500'>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", {  required: true,
                    minLength:6, 
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/
                })}
                    
                    placeholder="password" className="input input-bordered"  />
               
                {errors.password?.type === "minLength" && (
        <p className='text-red-500' >password must be 6 </p>
      )}
                {errors.password?.type === "maxLength" && (
        <p className='text-red-500' >password must be 20 character </p>
      )}
                {errors.password?.type === "pattern" && (
        <p className='text-red-500' > Password must contain at least one uppercase letter, one lowercase letter, and one special character.
 </p>
      )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
               
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
              <p>Already Registerred <Link to='/login'> Go login</Link></p>
            </form>
          </div>
        </div>
      </div>
      </>
    );
};

export default SignUp;