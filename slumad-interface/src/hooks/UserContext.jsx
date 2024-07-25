import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})


    const putUserData = async (userInfo) => {
        setUserData(userInfo)

        await localStorage.setItem('slumad:userData', JSON.stringify(userInfo)) // localStore so permite guardar String // e como o useInfo é um objeto, transformei ele em String com a estrutrura JSON antes dele entrar no parentes// 
    }
    
    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('slumad:userData') //recuperando o item//

            if (clientInfo) {
                setUserData(JSON.parse(clientInfo)) // transformando o clientInfo em objeto de novo// 
            }

        }

        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{ putUserData, userData }}>{children}</UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used with UserContext')
    }
    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}