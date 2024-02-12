import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_GENRE } from '../utils/mutations';

function NewGenre() {
    const [formState, setFormState] = useState({ genreName: '' });
    const [addGenre] = useMutation(ADD_GENRE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addGenre({

            variables: {
                name: formState.genreName,
            },

        });
        const token = mutationResponse.data.addGenre.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container my-1">
            <Link to="/newgenre">← Go to Login</Link>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="genreName">Genre Name:</label>
                    <input
                        placeholder="Genre"
                        name="genreName"
                        type="text"
                        id="genreName"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewGenre;