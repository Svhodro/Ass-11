import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../Firebase/firebase';

function Register() {
    const HandleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
                // ..
            });

    }
    return (
        <div className="flex w-full justify-center items-center h-screen">

            <div className='w-3/6 '>
                <div className="flex justify-center w-full text-center">
                    <p className='text-xl font-bold  font-serif '>SignUp</p>
                </div>
                <form className="card-body" onSubmit={(e) => {
                    HandleLogin(e);
                }}>


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
                        <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                </form>
                <div className='flex justify-center items-center gap-3 w-full'>
                    <p>Signin With  </p>
                    <button className="btn btn-square">
                        <FcGoogle className='size-8' />
                    </button>
                    <button className="btn btn-square">
                        <FaGithub className='size-8' />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Register