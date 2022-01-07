import React from 'react';
import Card from './Card';
import ThemeChanger from './ThemeChanger';

function Home({ isDark, setDark }) {
  return (
    <>
      <div className="col-sm-3">
        {/* <Card>
          <p>Children</p>
        </Card> */}
        <ThemeChanger isDark={isDark} setDark={setDark} />
      </div>
    </>
  );
}

export default Home;
