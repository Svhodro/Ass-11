import React from 'react'
import Nav from '../Components/Nav/Nav'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Homecetagore from './HomeCatagore/Homecetagore'


function Home() {
  const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sporsho',
      role: 'CEO',
      imageUrl:
        'https://img.freepik.com/free-photo/headshot-attractive-man-smiling-pleased-looking-intrigued-standing-blue-background_1258-65733.jpg?t=st=1715280211~exp=1715283811~hmac=eca9764af45959ec3e78362d2fb5408c1a59ae1e677db40533beda57752a9a81&w=740',
    },
    // More people...
  ]


  return (
    <div >   
      <Hero />
      <Homecetagore />
      {/* extra section 1 */}
      <div className='p-6'>
        <div className="hero h-[200px]  rounded-lg" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/flat-world-book-day-horizontal-sale-banner_23-2149298875.jpg?t=st=1715279642~exp=1715283242~hmac=05005b52313c4a77a2c99a54ae2f23ed92235b569c3578705b044656db85a163&w=740)' }}>
          <div className="hero-overlay bg-opacity-60  rounded-lg"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Big Book-sale 20% Off</h1>

            </div>
          </div>
        </div>
      </div>

      {/* extra section 2 */}
      <div className="bg-white py-10 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The maintainer And The Author Of The Libary 
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
      {/* extra section end */}
      <Footer />

    </div>
  )
}

export default Home