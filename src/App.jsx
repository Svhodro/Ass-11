import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import UserContextProvider from './Context/UserContectProvider'
import AddBookPage from './page/AddBookPage/AddBookPage'
import AllPage from './page/AllPage/AllPage'
import Bookdetails from './page/Bookdetails/Bookdetails'
import BorrowedPage from './page/BorrowedPage/BorrowedPage'
import Catagore from './page/Catagore/Catagore'
import Nopage from './page/Nopage/Nopage'
import Private from './page/Private/Private'
import Home from './Home/Home'
import Login from './page/Login/Login'
import Register from './page/Register/Register'


function App() {


  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
        <Route path="addbookpage" element={<AddBookPage />} />    
        <Route path="allpage" element={<AllPage />} />    
        <Route path="bookdetails" element={<Bookdetails />} />  
        <Route path="borrowedpage" element={<BorrowedPage />} />  
        <Route path="catagore" element={<Catagore />} />         
        </Route>      
        <Route path="*" element={<Nopage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
