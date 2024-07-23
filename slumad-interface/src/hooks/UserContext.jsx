import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const user = { name: 'cristian', age: 18 }
    const outroUser = { name: 'luiz', age: 28 }


    return (
        <UserContext.Provider value={{ user, outroUser }}>{children}</UserContext.Provider>
    )
}

export const useUser = () => {
const context = useContext(UserContext)

if(!context){
    throw new Error('useUser must be used with UserContext')
}
return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}