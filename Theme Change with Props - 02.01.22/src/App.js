import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
//api
import appRoutes from './routes';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  //useState = DURUM
  //useEffect = DURUM değişince component içindeki bilgiler değişsin
  // useEffect [] => componentIsLoaded

  const [isDark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#000' : '#fff';
  }, [isDark]); // isDark değişince güncelleniyor...

  useEffect(() => {
    document.body.style.backgroundColor = '#e2e2e2';
  }, []); // sayfa ilk açıldığında çalışıyor...
  return (
    <div>
      <Navbar isDark={isDark} />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Routes>
              {appRoutes.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    item.path === '/' ? (
                      <item.element isDark={isDark} setDark={setDark} />
                    ) : (
                      <item.element />
                    )
                  }
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
      <Footer isDark={isDark} />
    </div>
  );
}
