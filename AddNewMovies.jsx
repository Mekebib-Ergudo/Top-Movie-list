import { useContext, useState } from 'react';
import { movieCreat } from './MoveList';
import { data } from './MoveData';

const AddNewMovies = () => {
	let [movies, setMovies] = useContext(movieCreat);
	const [name, setName] = useState({ name: '', price: '' });

	// form Handeller
	const changeHandel = (e) => {
		e.preventDefault();
		let fakeId = Date.now();
		let newMovie = { ID: fakeId, Name: name.name, Price: name.price };
		let newSingleMovie = [...movies, newMovie];
		setMovies(newSingleMovie);
		setName({ name: '', price: '' });
	};
	// form state changer
	const handelChange = (e) => {
		setName({ ...name, [e.target.name]: e.target.value });
	};
	// reset
	const reset = () => {
		setMovies(data);
	};
	return (
		<div>
			<form onSubmit={changeHandel}>
				<label htmlFor="name">Movie:</label>
				<input
					type="text"
					name="name"
					id="name"
					value={name.name}
					onChange={handelChange}
				/>
				<label htmlFor="price">Price:</label>
				<input
					type="price"
					name="price"
					id="price"
					value={name.price}
					onChange={handelChange}
				/>
				<button>Submit</button>
			</form>
			{movies.length < 1 && (
				<button
					onClick={reset}
					style={{ background: 'purple', color: 'white' }}
				>
					Reset
				</button>
			)}
		</div>
	);
};

export default AddNewMovies;
