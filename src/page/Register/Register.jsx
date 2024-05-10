import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../Firebase/firebase';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [alart, setalart] = useState(false)
    const notify = () => toast("Register Successful!");

    // password validation

    const checkPassword = (password) => {


        // Check if the password length is at least 6 characters
        if (password.length < 6) {
            setalart(true)
            return false;

        }

        // Check if the password contains at least one capital letter
        if (!/[A-Z]/.test(password)) {
            setalart(true)
            return false;
        }

        // Check if the password contains at least one special character
        if (!/[!@#$%^&*()_+]/.test(password)) {
            setalart(true)
            return false;
        }

        // All conditions met, password is valid
        setalart(false)
        return true;



    }






    const HandleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const auth = getAuth(app);
        const valid = checkPassword(password)        
        if (valid) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                    notify()
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                    // ..
                });
        }


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
                        {alart ? <div role="alert" className="alert alert-error py-2 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Invalid password. </span>
                        </div> : <h1 className='hidden'></h1>}

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div>
                        <p>you have account go to<Link to='/login'><a className="link link-info"> Loginpage</a></Link> </p>
                    </div>
                </form>

            </div>
            <ToastContainer />
        </div>

    )
}

export default Register