import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/Login/image.avif'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import SocialLogin from '../../SocialLogin/SocialLogin';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photo, password);


        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replaCE: true })
        })
        .catch(error => console.log(error))

    }

    

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="photoUrl" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"  name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-3 text-center'>Already have an account? <Link to='/login' className='text-blue-800 font-bold'>Login</Link></p>

                        <SocialLogin></SocialLogin>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;