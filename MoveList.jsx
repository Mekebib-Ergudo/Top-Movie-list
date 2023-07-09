import { useState, createContext } from 'react';
import { data } from './MoveData';
import SingleMovie from './SingleMovie';
import AddNewMovies from './AddNewMovies';
export let movieCreat = createContext();
const MoveList = () => {
	const [movies, setMovies] = useState(data);

	const remove = (id) => {
		let update = movies.filter((movie) => movie.ID !== id);
		setMovies(update);
	};
	return (
		<>
			<div>
				<h2>Top: {movies.length} Box Office Movies</h2>
				{movies.map((movie) => {
					const { Name, Price, ID } = movie;
					return (
						<SingleMovie
							Name={Name}
							Price={Price}
							key={ID}
							remove={remove}
							ID={ID}
						/>
					);
				})}
			</div>
			<movieCreat.Provider value={[movies, setMovies]}>
				<AddNewMovies />
			</movieCreat.Provider>
		</>
	);
};

export default MoveList;
