import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../Context/UserContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function Update() {
  const { update, setupdate } = useContext(UserContext)
  const [categore, setcategore] = useState()
 
  const handlebus = () => {
    setcategore('business')
  }
  const handlemis = () => {
    setcategore('mystery')
  }
  const handleself = () => {
    setcategore('self-helf')
  }
  const handlerele = () => {
    setcategore('religion')
  }
  const notify = () => toast("You Have Sucssesfully Update The Book");
  const handleupdate = async(e) => {
    e.preventDefault();
    const id =update
    const img = e.target.url.value;
    const name = e.target.bookname.value;
    const author = e.target.authorname.value;
    const category = categore
    const rateing = e.target.rate.value
    const updatedata={
      img:img,
       name:name,
       author:author,
       category:category,
       rateing:rateing
    }
    // console.log(img,name,author,category,rating,id)
  

   try {
    await axios.put(`https://ass-11-server-ten.vercel.app/Update/${id}`,updatedata)
    .then(res=>{
         notify()
    })
    // Handle success (e.g., show a success message)

  } catch (error) {
    // Handle error (e.g., show an error message)

    console.log(error.message)
  }
  }
 
  
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full sm:w-2/3 md:w-1/ lg:1/3 '>
        <form className="card-body" onSubmit={(e) => {
            handleupdate(e);
          }}>

          <div className="form-control" >
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="text" placeholder="img-url" name='url' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name='bookname' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input type="text" placeholder="Author" className="input input-bordered" name='authorname' required />
          </div>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">Category</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li onClick={handleself }><a>Self-Helf</a></li>
              <li onClick={ handlerele}><a>Religion</a></li>
              <li onClick={ handlebus}><a>Business</a></li>
              <li onClick={handlemis }><a>MyStery</a></li>
            </ul>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rateing</span>
            </label>
            <input type="number" placeholder="" className="input input-bordered" name='rate' required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>





      <ToastContainer />
    </div>

  )
}

export default Update