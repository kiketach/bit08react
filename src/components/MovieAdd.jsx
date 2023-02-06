import React from 'react';
import { useForm } from '../hooks/useForm';

//Componente para agregar las peliculas

export const MovieAdd = ({ handleNewMovie }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newMovie = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewMovie(newMovie);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Qué peliculas quieres agregar?'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};