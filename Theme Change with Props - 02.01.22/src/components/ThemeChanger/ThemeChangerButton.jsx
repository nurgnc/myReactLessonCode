import React from 'react';
import siteTheme from '../../theme';


function ThemeChangerButton({ isDark, setDark }) {
const theme = isDark ? siteTheme.dark : siteTheme.light;

  return (
    <button onClick={() => setDark(!isDark)} className={`btn rounded ${theme.btn}`}>
      Change Theme
    </button>
  );
}

export default ThemeChangerButton;
