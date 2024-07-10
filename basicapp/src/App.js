import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './logo.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=27f4dc7a';
const movie1 = {
	Title: 'Italian Spiderman',
	Year: '2007',
	imdbID: 'tt2705436',
	Type: 'movie',
	Poster:
		'https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg',
};
const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		searchMovies('Spiderman');
	}, []);

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		//console.log(data.Search);
		setMovies(data.Search);
	};
	return (
		<div className='app'>
			<h1>MovieLand</h1>
			<div className='search'>
				<input
					placeholder='search for movies'
					value={searchTerm}
					onChange={(e) => {setSearchTerm(e.target.value)}}
				/>
				<img src={SearchIcon} alt='search' onClick={() => {searchMovies(searchTerm)}} />
			</div>
			{movies.length ? (
				<div className='container'>
					{movies.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</div>
			) : (
				<div className='empty'>
					<h3>No movies found</h3>
				</div>
			)}
		</div>
	);
};

export default App;
