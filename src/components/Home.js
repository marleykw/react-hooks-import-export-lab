import React from "react";

function Home(props) {
  let username = props.username
  let city = props.city
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;