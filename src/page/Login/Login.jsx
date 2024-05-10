import React, { useContext } from 'react'
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import UserContext from '../../Context/UserContext';
import { app } from '../../Firebase/firebase';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

function Login() {
    const {user, setuser}=useContext(UserContext)
    const HandleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.pass.value;
        // console.log(email,password)
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setuser(true)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
    }
    // github login 
    const handlegit = () => {

        const auth = getAuth(app);
        const provider = new GithubAuthProvider(app)
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
    
            // The signed-in user info.
            const user = result.user;
            setuser(true)
            console.log(user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
          });
      }
    // google login
    const handlegoogle = () => {
        // https://fir-198b8.firebaseapp.com/__/auth/handler
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider(app)
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setuser(true)
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode,errorMessage,email,credential);
                // ...
            });
    }
    return (
        <div className='w-full h-screen  flex justify-center items-center'>
  <div className='w-3/5 '>
            <form className="card-body bottom-2 border-zinc-500 w-full" onSubmit={(e) => {
                HandleLogin(e);
            }}>
                <div className="flex justify-center w-full text-center">
                    <p className='text-xl font-bold  font-serif '>SignIn</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">SignIn</button>
                </div>
            </form>
            <div className='flex justify-center items-center gap-3 w-full'>
                <p>Signin With  </p>
                <button className="btn btn-square" onClick={handlegoogle}>
                    <FcGoogle className='size-8' />
                </button>
                <button className="btn btn-square" onClick={handlegit}>
                    <FaGithub className='size-8' />
                </button>
            </div>
        </div>
        </div>
      
    )
}

export default Login