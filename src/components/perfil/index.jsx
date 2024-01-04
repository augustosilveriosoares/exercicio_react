import React from "react";
import './perfil.css';


const Perfil = ({ endereco, nome }) => {

  return (
    <>

      <img src={endereco} />
      <h3>{nome}</h3>
    </>
  )

}
export default Perfil;
