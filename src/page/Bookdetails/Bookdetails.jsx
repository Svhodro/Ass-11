import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../Context/UserContext'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bookdetails() {
  const [BorrowBooks, setBorroowBooks] = useState([])  
  const [give, setgive] = useState(true)  
  const notify = () => toast("You Have Already Borrw This Book");
  const { details, data } = useContext(UserContext)

  // console.log(data)

  useEffect(() => {
    axios.get('https://ass-11-server-ten.vercel.app/borrow')
      .then(res => setBorroowBooks(res.data))
  }, [])

  const Handleborrow = async (e) => {
    e.preventDefault();
    const id = details?._id
    const date = e.target.date.value;
    const email = data?.email;
    const currentDate = new Date().toLocaleDateString();
    
  BorrowBooks.map(res=>{
          console.log(res.name,details.name)
          if (res.useremail==email && res.name==details.name) {
            setgive(false)       
            
          }})

  if (give) {
    
    axios({
      method: 'post',
      url: 'https://ass-11-server-ten.vercel.app/addborrow',
      data: {

        retundate: date,
        useremail: email,
        borrowdate: currentDate,
        img:details.img,
        name:details.name,        
        category:details.category,
        quantity:details.quantity-1       

      }
    });

    const curentqantity = details.quantity
    const updatequantity = curentqantity - 1

    axios.put('https://ass-11-server-ten.vercel.app/borrowbook/' + details._id, {
      quantity: updatequantity
    });
  }else{
     notify()
  }



  }
  // console.log(give);
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
          {details.quantity > 0 ? <button className='btn btn-warning' onClick={() => document.getElementById('my_modal_2').showModal()}>Borrow</button> : <button className='btn btn-warning ' disabled>Broow</button>}
        </div>
      </div>
      {/* modal code */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          {/* modal code  */}
          <form className="card-body" onSubmit={(e) => {
            Handleborrow(e);
          }}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User-Email</span>
              </label>
              <input type="email" placeholder={data?.email} className="input input-bordered" readOnly />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Return-date</span>
              </label>
              <input type="date" placeholder="" className="input input-bordered" required name='date' />

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <ToastContainer />
    </div>
  )
}

export default Bookdetails
