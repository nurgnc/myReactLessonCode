import React from 'react';
import './style.css';
//components
import Navbar from './components/Navbar';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <Navbar />
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
