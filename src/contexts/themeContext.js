import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);
export const ThemeProvider = props => {
	const [darkTheme, setDarkTheme] = useState(true);
	return (
		<ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
			{props.children}
		</ThemeContext.Provider>
	);
};
