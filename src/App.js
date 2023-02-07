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
        <hr></hr>
				<div className='add-movie'>
				</div> <br/>
        <p>Las mejores películas de NETFLIX en 2023 van desde aventuras 
          repletas de acción, comedias románticas, películas de animación hasta las mejores películas de terror. 
          Hay algo para todo el mundo en su próxima lista de películas. Es hora de ver lo que NETFLIX puede tener preparado para sus suscriptores este año. </p>
				<MovieList
					movies={movies}
          handleDeleteMovie={handleDeleteMovie}
					handleUpdateMovie={handleUpdateMovie}
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
        <hr /> <br></br> 
					<MovieAdd handleNewMovie={handleNewMovie} />
			</div>
		</>
	);
}

export default App;