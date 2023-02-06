//

export const MovieReducer = (initialState, action) => {
	switch (action.type) {
		case 'Add Movie':
			return [...initialState, action.payload];

		case 'Delete Movie':
			return initialState.filter(movie => movie.id !== action.payload);

		case 'Complete Movie':
			return initialState.map(movie => {
				if (movie.id === action.payload) {
					return {
						...movie,
						done: !movie.done,
					};
				}

				return movie;
			});

		case 'Update Movie':
			return initialState.map(movie => {
				if (movie.id === action.payload.id) {
					return {
						...movie,
						description: action.payload.description,
					};
				}

				return movie;
			});

		default:
			return initialState;
	}
};