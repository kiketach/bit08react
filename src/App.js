import './index.css';
import { MovieAdd } from './components/MovieAdd';
import { MovieList } from './components/MovieList';
import { useMovie } from './hooks/useMovie';

function App() {
	const {
		movies,
		moviesCount,
		pendingMoviesCount,
		handleNewMovie,
		handleDeleteMovie,
		handleCompleteMovie,
		handleUpdateMovie,
	} = useMovie();

	return (
		<>
			<div className='card-to-do'>
				<h1> Peliculas recomendadas este 2023</h1>
				<div className='add-movie'>
          
					<hr /> <br></br> 
					<MovieAdd handleNewMovie={handleNewMovie} />
				</div>
        <div className='counter-movies'>
					<h3>
						Peliculas en total: <span>{moviesCount}</span>
					</h3>
					<h3>
						Pendientes por ver: <span>{pendingMoviesCount}</span>
					</h3>
				</div>
				<MovieList
					movies={movies}
					handleUpdateMovie={handleUpdateMovie}
					handleDeleteMovie={handleDeleteMovie}
					handleCompleteMovie={handleCompleteMovie}
				/>
			</div>
		</>
	);
}

export default App;