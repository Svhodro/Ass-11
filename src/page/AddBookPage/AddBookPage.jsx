import React from 'react'

function AddBookPage() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content w-4/5 flex-col lg:w-1/3 md:w-3/5 lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body ">
              {/* Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Book-image</span>
                </label>
                <input type="text" placeholder="Book-image" className="input input-bordered" required />
               
              </div>
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Book-Name</span>
                </label>
                <input type="text" placeholder="Book-Name" className="input input-bordered" required />
                
              </div>
              {/* Auther name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Book-Author</span>
                </label>
                <input type="text" placeholder="Book-Author" className="input input-bordered" required />
             
              </div>
              {/* Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Book-Category</span>
                </label>
                <input type="text" placeholder="Book-Category" className="input input-bordered" required />
              
              </div>
              {/* Short description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Short description</span>
                </label>
                <input type="text" placeholder="Short description" className="input input-bordered" required />
              
              </div>
              {/* Some context/text */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Some context/text</span>
                </label>
                <input type="text" placeholder="Some context/text" className="input input-bordered" required />
                
              </div>
              {/* Ratting */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Rateing</span>
                </label>
                <input type="number" placeholder='Rateing' className="input input-bordered" required />
               
              </div>
              {/* Quantity */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Quantity</span>
                </label>
                <input type="number" placeholder='Quantity' className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBookPage