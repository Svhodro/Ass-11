import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../Context/UserContext'
import axios from 'axios'

function BorrowedPage() {
  const { data } = useContext(UserContext)
  const [BorrowBooks, setBorroowBooks] = useState([])  
  
  useEffect(() => {
    axios.get('https://ass-11-server-ten.vercel.app/borrow')
      .then(res => setBorroowBooks(res.data))


  }, [])
 
  return (
    <div className='w-full flex justify-center items-center flex-wrap p-4 gap-3'>
      {
        BorrowBooks.map(res=>{
          const curentemail=data.email

          if (res.useremail==curentemail) {
            return <div className="card card-compact w-72  h-[500px] bg-base-100 shadow-xl">
            <figure><img src={res.img} alt="Shoes" className='object-contain' /></figure>
            <div className="card-body font-bold font-serif">
              <h2 className="card-title">{res.name}</h2>
              <p>Category : {res.category}</p>
              <p>BorrowDate : {res.retundate}</p>              
              <div className="card-actions justify-center py-6">
                <button className="btn btn-primary">Retune</button>
              </div>
            </div>
          </div>
          }
        })
      }
     
    </div>
  )
}

export default BorrowedPage