import React from 'react'
import { createContext } from "react";

const SocketContext = createContext();


const ContextProvider = ({children}) => {
    const data1 = "unit"
    const data2 = "text"
    return (
        <SocketContext.Provider value={{
            // data to be passed
            data1,
            data2
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export {ContextProvider ,SocketContext}
