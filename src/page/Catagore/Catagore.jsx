import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../Context/UserContext'
import axios from 'axios'
function Catagore() {
  const { catagory } = useContext(UserContext)
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    axios.get('https://ass-11-server-ten.vercel.app/book')
      .then(data => {
        setdata(data.data)
        setloading(false)
      })
  }, [catagory])

  return (
    <div className='w-full'>
      {loading ? <div className='w-full p-4 flex justify-center items-center h-screen ' >
        <span className="loading loading-ring loading-lg size-32"></span>
      </div> : <div className='hidden' >
        <span className="loading loading-ring loading-lg"></span>
      </div>}
      <div className='w-full flex justify-center items-center flex-wrap gap-4 p-6'>
      {data.map((res) => {
        if (res.category == catagory) {
          return <div className="card w-80 bg-base-100 shadow-xl rounded hover:rounded-lg h-[500px] ">
                  <div className="card-body">
                    <h2 className="card-title">{res.name}</h2>
                    <p>Author:{res.author}</p>
                    <p>Category:{res.category}</p>
                    <p>Rateing:{res.rateing}</p>
                    <button className='btn'>Details</button>
                   </div>
                  <figure><img src={res.img} alt="Shoes" className='object-cover'/></ figure>
                 </div>
        }
      })}
      </div>
    </div>
  )
}

export default Catagore