import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ChangeThemeButton = (props) => {
  const { theme, themeName, setThemeName } = useContext(ThemeContext);
  return (
    <button
      className={`btn ${theme.button}`}
      onClick={() =>
        setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'))
      }
    >
      Change Theme - {themeName}
    </button>
  );
};

export default ChangeThemeButton;
