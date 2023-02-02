import React from 'react'

export const Peliculas = () => {
  const arr = ['Tríada', 'Jugando con fuego: Alemania', 'Infiesto', 'Lupin. Season 2', 'Bridgerton. Season 4', 'Formula 1. Season 5']
  const items = arr.map((item,i) => <li key= {i} > {item} </li>)
  return (
    <>
    <div>Lista de peliculas que no te puedes perder este inicio de 2023</div>
    <ol>{items}</ol>
    </>
  )
}

export default Peliculas;
