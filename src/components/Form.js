import React from "react";

export const Form = ({task, setTask}) => {

    const handleInput = (e) => {
        setTask ({...task, name: e.target.value})
    }

    const handleAdd = (e) => {
        e.preventDefault()
        console.log('works')
    }
    
return (

    <form>
        <input type="text" placeholder="Nombre de la pelicula" onInput={handleInput} />
        <button onClick={handleAdd}> Agregar Pelicula </button>
    </form>
)
} 