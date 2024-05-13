import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBookPage() {
  const notify = () => toast("Add Sucssesfull!");
  const rateeing= () =>toast("only you can give 1-to-5 star ")
  const [rating,setrating]=useState()
  const handleAdd=(e)=>{
    e.preventDefault();
    const img = e.target.img.value;
    const name = e.target.name.value;
    const author = e.target.author.value;
    const categore = e.target.categore.value;
    const des = e.target.des.value;
    const text = e.target.text.value;
    const quantity=e.target.quantity.value
    const curentrating=e.target.rate.value
    if (curentrating<=5) {
      setrating(curentrating)
    } else {
      rateeing()
    }
    
    axios.post('https://ass-11-server-ten.vercel.app/AddBookData', {
            
                  img:img,
                  name:name,
                  quantity:quantity,
                  author:author,
                  category:categore,
                  des:des,
                  rateing:rating,


    }).then(res=>{
         notify()
         console.log(res.data)
    })

    
  }
  return (
    <div className='w-full flex justify-center items-center'>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content w-4/5 flex-col lg:w-1/3 md:w-3/5 lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body " onSubmit={(e) => {
                    handleAdd(e);
                }}>
              {/* Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Book-image</span>
                </label>
                <input type="text" placeholder="Book-image" className="input input-bordered" name='img' required />
               
              </div>
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Book-Name</span>
                </label>
                <input type="text" placeholder="Book-Name" className="input input-bordered" name='name' required />
                
              </div>
              {/* Auther name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Book-Author</span>
                </label>
                <input type="text" placeholder="Book-Author" className="input input-bordered" name='author' required />
             
              </div>
              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Book-Category</span>
                </label>
                <input type="text" placeholder="Book-Category" className="input input-bordered"name='categore'  required />
              
              </div>
              {/* Short description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Short description</span>
                </label>
                <input type="text" placeholder="Short description" className="input input-bordered" name='des' required />
              
              </div>
              {/* Some context/text */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Some context/text</span>
                </label>
                <input type="text" placeholder="Some context/text" className="input input-bordered" name='text' required />
                
              </div>
              {/* Ratting */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Rateing</span>
                </label>
                <input type="number" placeholder='Rateing' className="input input-bordered" name='rate' required />
               
              </div>
              {/* Quantity */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Quantity</span>
                </label>
                <input type="number" placeholder='Quantity' className="input input-bordered" name='quantity' required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddBookPage