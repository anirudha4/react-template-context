import React, { createContext, useState } from 'react'

export const HomeStoreContext = createContext();
export default function HomeStoreProvider({ children }) {
    const [results, setResults] = useState([]);
    return (
        <HomeStoreContext.Provider value={{ results }}>
            { children }            
        </HomeStoreContext.Provider>
    )
}
