import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext'

function Bookdetails() {
  const { details } = useContext(UserContext)
  console.log(details)
  return (
    <div className='w-full flex justify-center p-8'>
     <div className='w-2/4 flex flex-col sm:flex-row justify-around items-center gap-4'>
      <div className='w-full '>
        <img src={details.img} />
      </div>
      <div className='2/3 font-bold flex flex-col gap-4'>
        <h1>Name: {details.name}</h1>
          <p>Author: {details.author}</p>
          <p>Category: {details.category}</p>
          <p>Quantity: {details.quantity}</p>
          <p>Rateing: {details.rateing}</p>          
          {details.quantity>0?<button className='btn btn-warning'>Borrow</button>:<button className='btn '></button>}
      </div>
     </div>
    </div>
  )
}

export default Bookdetails
