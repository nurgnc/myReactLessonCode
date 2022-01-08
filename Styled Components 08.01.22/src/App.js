import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { styledComponentsTheme } from './styledComponents';
import { ThemeContext } from './contexts/ThemeContext';
//components
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const { themeName } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={styledComponentsTheme[themeName]}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="*" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

//obje çağırıken 3 yöntem var
// styledComponentsTheme['dark'] : bunun kullanılmasının sebei yazım stillerini rahat kullanmak içindir. mesela dark değil de dark-2 olsaydı nokta koyarak yazdığımızda kabul etmezdi. 
// styledComponentsTheme.dark
// styledComponentsTheme[themeName]
