import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    setTimeout(() => {
      fetch(URL)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setData(json);
        });
    }, 5000);
  }, []);

  if (loading) {
    return <h1>Yükleniyor...</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} item={item}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
