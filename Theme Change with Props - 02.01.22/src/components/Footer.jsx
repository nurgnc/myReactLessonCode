import React from 'react';
import siteTheme from '../theme';

function Footer({ isDark }) {
  const theme = isDark ? siteTheme.dark : siteTheme.light;
  return (
    <div className={`${theme.bgColor} p-5 mt-5 border border-info`}>
      <h1 className={`${theme.textColor}`}>Footer</h1>
    </div>
  );
}

export default Footer;
