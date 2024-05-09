import { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [cart, setCart] = useState(false)
    const [user, setuser] = useState(true)
    const [register,setRegister]=useState(true)

    return (
        <UserContext.Provider value={{register,setRegister,cart, setCart,user, setuser}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider