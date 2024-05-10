import { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [cart, setCart] = useState(false)
    const [user, setuser] = useState(false)
    const [register,setRegister]=useState(true)
    const [catagory,setCategory]=useState("")

    return (
        <UserContext.Provider value={{register,setRegister,cart, setCart,user, setuser,catagory,setCategory}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider