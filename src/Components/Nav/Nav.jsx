import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../Context/UserContext'
import { ImSun } from "react-icons/im";
import { BsCloudMoon } from "react-icons/bs";

function Nav() {
 

    const navigate = useNavigate()
    const { user, setuser, data, setData } = useContext(UserContext)
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'night' ? 'light' : 'night');
    };

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handlelogin = () => {
        navigate('/login')
    }
    const handlelogout = () => {
        setuser(false)
        localStorage.clear()
    }
    useEffect(() => {
        let local = localStorage.getItem("dataKey")
        let data=JSON.parse(local)
               
        if (data?.email) {
            setuser(true)
            setData(data)
        } else {
            setuser(false)
            setData(data)
        }
    },[])

    return (
        <div className='px-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/private/addbookpage'>AddBook</Link></li>
                            <li><Link to='/private/allpage'>AllBooks</Link></li>
                            <li><Link to='/private/borrowedpage'>BorrowedBooks</Link></li>
                            <li>{user ? <button className='btn-sm btn md:btn' onClick={handlelogout}>LogOut</button> : <button className='btn-sm btn md:btn' onClick={handlelogin} >Login</button>}</li>

                        </ul>
                    </div>
                    <img src="/Logo.png" className='size-12' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/private/addbookpage'>AddBook</Link></li>
                        <li><Link to='/private/allpage'>AllBooks</Link></li>
                        <li><Link to='/private/borrowedpage'>BorrowedBooks</Link></li>

                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" onClick={toggleTheme} />

                        {/* sun icon */}
                        <ImSun className="swap-off fill-current w-6 h-6" />

                        {/* moon icon */}

                        <BsCloudMoon className="swap-on fill-current w-6 h-6" />
                    </label>
                    {user ? <div className='flex justify-center items-center gap-2'>
                        <button className=' hidden lg:flex lg:btn' onClick={handlelogout}>LogOut</button>
                        {/* tooltip */}
                        <div className="tooltip tooltip-bottom" data-tip={data?.displayName}>
                        <div className="avatar pl-2">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={data?.photoURL} alt='Profile-img' />
                            </div>
                        </div>
                             </div>
                       
                    </div> : <button className=' btn-sm btn md:btn' onClick={handlelogin} >Login</button>}



                </div>
            </div>
        </div>
    )
}

export default Nav