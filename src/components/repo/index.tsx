import React, { useEffect, useState } from "react";

const Repo = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/augustosilveriosoares/repos')
      .then(res => res.json())
      .then(resJson => {
        setRepos(resJson);
        console.log(resJson);
      })
  }, []);
  return (
    <ul>
      {repos.map(({ id, name, language }) => (

        <li key={id}>
          <b>Nome:</b>{name}
          <br /><b>Linguagem:</b>{language}

        </li>
      ))}
    </ul>
  )
}


export default Repo;
