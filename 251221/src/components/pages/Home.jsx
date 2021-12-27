import React from 'react';
import PostSearch from './PostSearch';
import Faker from 'faker/locale/tr';

function Home(props) {
  return (
    <>
      <h1>Ana Sayfa</h1>
      <ul>
        {[...Array(10)].map((item, index) => (
          <li key={index}>
            {Faker.name.findName()} - {Faker.address.country()}
          </li>
        ))}
      </ul>
      <PostSearch />
    </>
  );
}

export default Home;
