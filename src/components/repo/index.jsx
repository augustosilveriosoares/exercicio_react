import React, { useEffect, useState } from "react";
import styles from './Repo.module.css';

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
    <div class="container">
      <ul className={styles.list}>
        {repos.map(({ id, name, language }) => (

          <li key={id} className={styles.item}>
            <div className={styles.nome}>
              <b>Nome:</b>{name}
            </div>
            <div className={styles.lang}><b>Linguagem:</b>{language}</div>


          </li>
        ))}
      </ul>
    </div>
  )
}

export default Repo;
