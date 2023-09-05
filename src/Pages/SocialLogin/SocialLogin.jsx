
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";


const SocialLogin = () => {


    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider;
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
            })

    }

    const githubProvider = new GithubAuthProvider;
    const handleGithubSignIn =()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true })
            
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <div>
            <div className="divider">OR</div>
            <div >
                <button onClick={handleGoogleSignIn} className='btn bg-blue-700 text-white w-full' type="submit"><FaGoogle className="me-2"></FaGoogle>
                    Login With Google
                </button>
                <button onClick={handleGithubSignIn} className='btn bg-gray-700 text-white w-full' type="submit"><FaGithub className="me-2"></FaGithub>
                    Login With GitHub
                </button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SocialLogin;