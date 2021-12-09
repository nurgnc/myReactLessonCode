import React, { useState } from 'react';
import './style.css';
import Card from './components/Card';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  const users = [
    { id: 1, userName: 'Duygu' },
    { id: 2, userName: 'MerveNur' },
    { id: 3, userName: 'Merve' },
    { id: 4, userName: 'Maide' },
    { id: 5, userName: 'Suheda' },
    { id: 6, userName: 'Senanur' },
    { id: 7, userName: 'Nur' },
    { id: 8, userName: 'Yurdagul' },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="mb-3">
              <label htmlFor="search" className="form-label">
                Search
              </label>
              <input
                name="search"
                type="text"
                className="form-control"
                id="search"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          {users
            .filter((user) => user.userName.toLowerCase().includes(searchValue))
            .map((user) => (
              <div key={user.id} className="col-sm-3 mb-3">
                <Card user={user} userName={user.userName} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

// burada klavyede ki her tuşa bastıkça database'den veri getirmesi kullanışlı değildir.
// bu durum için arama butonu koyulabilir veya saniye kontrolü yapılabilir,
//tuşlara bastıktan birkaç saniye sonra arama yapması sağlanabilir.
