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
				<h1> Recordatorios de compras</h1>
        <hr></hr>
				<div className='add-movie'>
				</div> <br/>
        <p>Esta aplicacion te sera util para planear tus compras antes de ir al supermercado y no se te olvide nada que necesites! </p>
				<MovieList
					movies={movies}
          handleDeleteMovie={handleDeleteMovie}
					handleUpdateMovie={handleUpdateMovie}
					handleCompleteMovie={handleCompleteMovie}
				/>
        <br></br> <hr></hr>
           <div className='counter-movies'>
        <h3>
						Te faltan <span>{pendingMoviesCount}</span> Artículos por comprar.
					</h3>
          <br></br>
          <h3>
						 <span>{moviesCount}</span> Artículos comprados.
					</h3>
				</div>
        <hr /> <br></br> 
					<MovieAdd handleNewMovie={handleNewMovie} />
			</div>
		</>
	);
}

export default App;