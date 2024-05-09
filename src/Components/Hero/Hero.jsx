import React from 'react'

function Hero() {
    return (

        <div className='h-[500px]'>
            <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1715275769~exp=1715279369~hmac=63e77400496bf5c536d5bbee01c5fe9e58c610b471aca7d0f874aa5ebdb17420&w=740)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-slate-300">Book's For You </h1>
                        <p className="mb-5">Only Books Can Make The more Knowlage Of Your Maid.</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero