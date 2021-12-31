import React from 'react';
import './style.css';
import NavBar from './components/Navbar';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
