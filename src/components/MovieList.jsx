import React from 'react';
import { MovieItem } from './MovieItem';

//Componente para la lista

export const MovieList = ({
	movies,
	handleUpdateMovie,
	handleDeleteMovie,
	handleCompleteMovie,
}) => {
	return (
		<ul>
			{movies.map(movie => (
				<MovieItem
					key={movie.id}
					movie={movie}
					handleUpdateMovie={handleUpdateMovie}
					handleDeleteMovie={handleDeleteMovie}
					handleCompleteMovie={handleCompleteMovie}
				/>
			))}
		</ul>
	);
};