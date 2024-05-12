import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../Context/UserContext'
import axios from 'axios'

function BorrowedPage() {
  const { data } = useContext(UserContext)
  const [BorrowBooks, setBorroowBooks] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    axios.get('https://ass-11-server-ten.vercel.app/borrow')
      .then(res => {
        setBorroowBooks(res.data)
        setloading(false)

      })


  }, [])



  return (
    <div className='w-full flex justify-center items-center flex-wrap p-4 gap-3'>
      {loading ? <div className='w-full p-4 flex justify-center items-center h-screen ' >
        <span className="loading loading-ring loading-lg size-32"></span>
      </div> : <div className='hidden' >
        <span className="loading loading-ring loading-lg"></span>
      </div>}
      {
        BorrowBooks.map(res => {
          const id = res._id
          const quantity=res.quantity+1
          const curentemail = data.email
          const handlereturn = async () => {
            //delet the borrow book data
            try {
              const res = await axios.delete('/api/products/delete', { data: { id } });
              if (res.data.success) {
                alert(res.data.msg);
              }
            } catch (err) {
              console.error(err);
            }
            //update thebook quantity
            axios.put('http://localhost:5000/updatequntity', {
              Bookname:res.name,
              update:quantity
            });
          }

          if (res.useremail == curentemail) {
            return <div className="card card-compact w-72  h-[500px] bg-base-100 shadow-xl">
              <figure><img src={res.img} alt="Shoes" className='object-contain' /></figure>
              <div className="card-body font-bold font-serif">
                <h2 className="card-title">{res.name}</h2>
                <p>Category : {res.category}</p>
                <p>BorrowDate : {res.retundate}</p>
                <div className="card-actions justify-center py-6">
                  <button className="btn btn-primary" onClick={handlereturn}>Retune</button>
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