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
				<MovieList
					movies={movies}
					handleUpdateMovie={handleUpdateMovie}
					handleDeleteMovie={handleDeleteMovie}
					handleCompleteMovie={handleCompleteMovie}
				/>
        <br></br> <hr></hr>
        
           <div className='counter-movies'>
        <h3>
						Te faltan <span>{pendingMoviesCount}</span> peliculas por ver.
					</h3>
          <br></br>
          <h3>
						 <span>{moviesCount}</span> Peliculas en total.
					</h3>
				</div>
        
			</div>
		</>
	);
}

export default App;