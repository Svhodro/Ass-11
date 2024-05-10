import React, { useContext, useEffect } from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import UserContext from '../../Context/UserContext'

function Private() {
  const navigate=useNavigate()
    const {user, setuser}=useContext(UserContext)
    if (user === true) {
        return <Outlet />;
      } else {     
        useEffect(()=>{
           if(user===false){
            navigate('/')
           }
        }) 
          
      }

}

export default Private