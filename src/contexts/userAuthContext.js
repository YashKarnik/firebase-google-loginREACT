import React, { createContext, useContext } from 'react';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
export const UserProvider = props => {
	return (
		<UserContext.Provider value={''}>{props.children}</UserContext.Provider>
	);
};
