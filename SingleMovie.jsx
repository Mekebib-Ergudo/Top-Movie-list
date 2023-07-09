const SingleMovie = ({ Name, Price, ID, remove }) => {
	return (
		<div>
			<h3>{Name}</h3>
			<p>{Price}</p>
			<button
				style={{ background: 'purple', color: 'white' }}
				onClick={() => remove(ID)}
			>
				Remove
			</button>
		</div>
	);
};

export default SingleMovie;
