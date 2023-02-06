import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

//Componente para actualizar la edicion en la lista

export const MovieUpdate = ({ movie, handleUpdateMovie }) => {
	const { updateDescription, onInputChange } = useForm({
		updateDescription: movie.description,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = movie.id;
		const description = updateDescription;

		handleUpdateMovie(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`input-update ${
					movie.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿Qué Pelicula desea ver?'
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};