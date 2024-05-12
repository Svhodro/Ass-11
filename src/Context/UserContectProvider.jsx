import { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [cart, setCart] = useState(false)
    const [user, setuser] = useState(false)
    const [register,setRegister]=useState(true)
    const [catagory,setCategory]=useState("")
    const [data, setData] = useState([])
    const [details, setdetails] = useState([])
    const [update, setupdate] = useState()
    
    return (
        <UserContext.Provider value={{register,setRegister,cart, setCart,user, setuser,catagory,setCategory,data, setData,details, setdetails,update, setupdate}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider