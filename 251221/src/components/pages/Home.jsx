import React, {useEffect} from 'react';
import PostSearch from './PostSearch';
import Faker from 'faker/locale/tr'; //rastgele bilgiler için kullanılabilir

function Home(props) {

  function runApi() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const posts = [...Array(10)].map((item,index) => {
      const post = {title: Faker.name.findName(), 
        author: Faker.name.firstName()}
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(post),
        redirect: "follow"
      };
      
      fetch("http://localhost:4000/posts", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.error("error", error));

        return post
    })
  }

  return (
    <>
      <h1>Ana Sayfa</h1>
      <button onClick={runApi}>Click Me</button>
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
