import { useEffect, useReducer } from 'react';
import { MovieReducer } from '../Moviereducer';

export const useMovie = () => {
	const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('movies')) || []
    }

	const [movies, dispatch] = useReducer(
		MovieReducer,
		initialState,
		init
	);

    const moviesCount = movies.length
    const pendingMoviesCount = movies.filter(movie => !movie.done).length


    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies))
    }, [movies])


	const handleNewMovie = movie => {
		const action = {
			type: 'Add Movie',
			payload: movie,
		};

		dispatch(action);
	};

	const handleDeleteMovie = id => {
		const action = {
			type: 'Delete Movie',
			payload: id,
		};

		dispatch(action);
	};

	const handleCompleteMovie = id => {
		const action = {
			type: 'Complete Movie',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdateMovie = (id, description) => {
		const action = {
			type: 'Update Todo',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};

    return{
        movies,
        moviesCount,
        pendingMoviesCount,
        handleNewMovie,
        handleDeleteMovie,
        handleCompleteMovie,
        handleUpdateMovie
    }
};