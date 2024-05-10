import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

function AllPage() {
  const [data, setData] = useState([])
  const [grid, setGrid] = useState(true)
  const [loading, setloading] = useState(true)
  useEffect(() => {
    axios.get('https://ass-11-server-ten.vercel.app/book')
      .then(data => {
        setData(data.data)
        setloading(false)
      })
  })
 
  const [ShoeAvalible, setShowAvalible] = useState(false)

  const handleshort = () => {
    setShowAvalible(true)
  }
  const handlenormal = () => {
    setShowAvalible(false)
  }
  const handlegrid = () => {
    setGrid(!grid)
  
  }
  const handletable = () => {
    setGrid(!grid)
    
  }
  return (
    <div className='w-full '>
      
      
      <div className='w-full p-4 flex justify-between items-center'>
        {/* sortng function */}
        <details className="dropdown">
          <summary className="m-1 btn border-2 border-gray-600">Fillter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={handleshort}><a>Show available Book</a></li>
            <li onClick={handlenormal}><a>Normal</a></li>
          </ul>
        </details>
        {/* Manu Icon And Change system */}
        <label className="swap swap-rotate">

          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="synthwave" />

          {/* sun icon */}
         
          <FiAlignJustify className="swap-off fill-current w-6 h-6"  onClick={handletable}/>

          {/* moon icon */}
      
          <FiGrid className="swap-on fill-current w-6 h-6"  onClick={handlegrid}/>

        </label>
      </div>
      {loading?<div className='w-full p-4 flex justify-center items-center h-screen ' >
      <span className="loading loading-ring loading-lg size-32"></span>
      </div>:<div className='hidden' >
      <span className="loading loading-ring loading-lg"></span>
      </div>}
      <div className='w-full p-4 flex justify-center items-center'>
        <div className='w-5/6 flex justify-center items-center p-6 flex-wrap gap-4'>
          {ShoeAvalible ? data.map((res) => {
            if (res.quantity > 0) {
              if (grid==true) {
                return <div className="card card-compact w-72  h-[500px] bg-base-100 shadow-xl">
                <figure><img src={res.img} alt="Shoes" className='object-contain' /></figure>
                <div className="card-body">
                  <h2 className="card-title">{res.name}</h2>
                  <p>Category: {res.category}</p>
                  <p>Author: {res.author}</p>
                  <p>Rateing:{res.rateing}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
              </div>
              } else {
                   return <div className="overflow-x-auto w-full flex flex-col justify-center items-center flex-wrap ">
                   <table className="table w-[360px] lg:w-full">
               
                     <tbody>
                       {/* row 1 */}
                       <tr>                         
                         <td>
                           <div className="flex items-center gap-3">
                             <div className="avatar">
                               <div className="mask mask-squircle w-12 h-12">
                                 <img src={res.img} />
                               </div>
                             </div>
                             <div>
                               <div className="font-bold">{res.name}</div>             
                             </div>
                           </div>
                         </td>       
                         <td>
                         {res.category}          
                         </td>
                         <td>
                           {res.author}
                         </td>
                         <td>
                         <td>
                         {res.rateing}
                         </td>
                         </td>
                         <th>
                           <button className="btn btn-ghost btn-xs">Update</button>
                         </th>
                       </tr>     
                     </tbody>
                     {/* foot */} 
                     
                   </table>
                 </div>
              } 
            }

          }) : data.map((res) => {
             if (grid==true) {
              return <div className="card card-compact w-72  h-[500px] bg-base-100 shadow-xl">
              <figure><img src={res.img} alt="Shoes" className='object-contain' /></figure>
              <div className="card-body">
                <h2 className="card-title">{res.name}</h2>
                <p>Category: {res.category}</p>
                <p>Author: {res.author}</p>
                <p>Rateing:{res.rateing}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
            } else {
                 return <div className="overflow-x-auto w-full flex flex-col justify-center items-center flex-wrap">
                 <table className="table w-[360px] lg:w-full" >
                  
                   <tbody>
                     {/* row 1 */}
                     <tr>                     
                       <td>
                         <div className="flex items-center gap-3">
                           <div className="avatar">
                             <div className="mask mask-squircle w-12 h-12">
                               <img src={res.img} />
                             </div>
                           </div>
                           <div>
                             <div className="font-bold">{res.name}</div>             
                           </div>
                         </div>
                       </td>       
                       <td>
                       {res.category}          
                       </td>
                       <td>
                         {res.author}
                       </td>
                       <td>
                       <td>
                       {res.rateing}
                       </td>
                       </td>
                       <th>
                         <button className="btn btn-ghost btn-xs">Update</button>
                       </th>
                     </tr>     
                   </tbody>
                   {/* foot */} 
                   
                 </table>
               </div>
            } 
          })}

        </div>
      </div>
    </div>



  )
}


export default AllPage

