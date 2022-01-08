import React, { createContext, useState, useEffect } from 'react';
import themes from '../themes';

const ThemeContext = createContext(); //bilgiyi tutan

function ThemeContextProvider(props) {
  // bilgiyi sağlayan

  const [themeName, setThemeName] = useState('dark');

  useEffect(() => {
    const localThemeName = localStorage.getItem('themeName')
      ? localStorage.getItem('themeName')
      : localStorage.setItem('themeName', themeName);

    setThemeName(localThemeName);
  }, []); // sayfa ilk açıldığında

  useEffect(() => {
    localStorage.setItem('themeName', themeName);

    const theme = themeName === 'light' ? themes.light : themes.dark;

    document.body.className = '';
    document.body.classList.add(theme.backgroundColor, theme.color);
  }, [themeName]); //themename değiştiğinde

  return (
    <ThemeContext.Provider
      value={{
        theme: themeName === 'light' ? themes.light : themes.dark,
        setThemeName,
        themeName,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
