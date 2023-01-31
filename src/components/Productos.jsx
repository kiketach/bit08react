import React from 'react'

export const Productos = () => {
  const arr = ['Harina de Maiz', ' Mantequilla', 'Pan de Sandwich', 'Leche Liquida', 'Jamon', 'Queso', 'Arroz']
  const items = arr.map((item,i) => <li key= {i} > {item} </li>)
  return (
    <>
    <div>Lista Quincenal ON LINE de control de compras</div>
    <ol>{items}</ol>
    </>
  )
}

export default Productos;
