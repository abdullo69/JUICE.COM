import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext()


export const ProductContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    return <ProductContext.Provider value={{ setCart, cart }}>{children}</ProductContext.Provider>
}