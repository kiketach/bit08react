import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { MovieUpdate } from './MovieUpdate';

//Componente de eventos 

export const MovieItem = ({
	movie,
	handleUpdateMovie,
	handleDeleteMovie,
	handleCompleteMovie,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteMovie(movie.id)}>
				<label
					className={`container-done ${movie.done ? 'active' : ''}`}
				></label>
			</span>
			<MovieUpdate movie={movie} handleUpdateMovie={handleUpdateMovie} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteMovie(movie.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};