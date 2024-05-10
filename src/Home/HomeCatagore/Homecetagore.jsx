import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../Context/UserContext'

function Homecetagore() {
    const {setCategory}=useContext(UserContext)
    const navigate=useNavigate()
      const handleRelegion=()=>{
             setCategory("religion")
              navigate('/private/catagore')
      }
      const handlebusiness=()=>{
        setCategory("business")
        navigate('/private/catagore')
      }
      const handleMystery=()=>{
        setCategory("mystery")
        navigate('/private/catagore')
      }
      const handleself=()=>{
        setCategory("self-helf")
        navigate('/private/catagore')
      }

    return (
        <div className='flex justify-center items-center p-4 gap-4 flex-wrap'>
            <div className="card w-72 h-96 bg-base-100 shadow-xl" onClick={handleRelegion}>
                <figure><img src="https://img.freepik.com/free-photo/vintage-photo-hand-with-bible-praying_1150-9232.jpg?t=st=1715279217~exp=1715282817~hmac=21476434f35429f0dcc18248b75e26c76f51b18e5b21506043f7488f7296600f&w=740" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Category</h2>
                    <p>Religion</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See All Book's</button>
                    </div>
                </div>
            </div>
            {/* 2nd card */}
            <div className="card w-72 h-96 bg-base-100 shadow-xl" onClick={handlebusiness}>
                <figure><img src="https://img.freepik.com/free-photo/flat-lay-business-concept_53876-24738.jpg?t=st=1715279324~exp=1715282924~hmac=bb29b990e913f28aab7c21590b5aefcfb0384bb6361fb84a130bb6dcd99efe74&w=740" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Category</h2>
                    <p>Business</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See All Book's</button>
                    </div>
                </div>
            </div>
            {/* 3nd card */}
            <div className="card w-72 h-96 bg-base-100 shadow-xl" onClick={handleMystery}>
                <figure><img src="https://img.freepik.com/free-photo/man-walking-misty-woods_53876-98221.jpg?t=st=1715279377~exp=1715282977~hmac=c7c473b08b0cc5e6bb2e3231bd0c1f8226073d18d0d51f08b1aed4335c334046&w=740" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Category</h2>
                    <p>Mystery</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See All Book's</button>
                    </div>
                </div>
            </div>
            {/* 4nd card */}
            <div className="card w-72 h-96 bg-base-100 shadow-xl" onClick={handleself}>
                <figure><img src="https://img.freepik.com/free-photo/note-with-encouragement-quote-starting-with-dear_23-2150105114.jpg?t=st=1715279467~exp=1715283067~hmac=20514e0ecffd09a524122de3df4df9f79ce5fe6ece80972ce8454654139a766a&w=740" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Category</h2>
                    <p>Self-Help</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See All Book's</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homecetagore