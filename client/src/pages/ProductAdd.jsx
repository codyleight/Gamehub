import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../utils/mutations';
import { QUERY_CATEGORIES } from '../utils/queries';


function ProductAdd(props) {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    image: '',
    price: 0,
    category: '',
  });
  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Form State:', formState);

    await addProduct({
      variables: {
        name: formState.name,
        description: formState.description,
        image: formState.image,
        price: formState.price,
        category: formState.category, // Replace with the specific category ID
      },


    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let parsedValue = value;

    if (name === 'price') {
      parsedValue = parseFloat(value);
    }

    setFormState({
      ...formState,
      [name]: parsedValue,
    });
  };
  return (
    <div className="container my-1 text-center">
      <h2 className='text-center'>Add a Game!</h2>
      <form className='text-center'
        onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2 text-center">
          <label htmlFor="name">Game Name:</label>
          <input
            placeholder="zelda"
            name="name"
            type="text"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="description">Description: </label>
          <input
            placeholder="description"
            name="description"
            type="text"
            id="description"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="image">Image:</label>
          <input
            placeholder="your image name here"
            name="image"
            type="text"
            id="image"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="price">price:</label>
          <input
            placeholder="number"
            name="price"
            type="number" // Change to "number"
            id="price"
            step="0.01"
            onChange={handleChange}
          />
        </div>

        <div className="flex-row space-between my-2">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" onChange={handleChange}>
            <option value="">Select a Category</option>
            {loading ? (
              <option>Loading Categories...</option>
            ) : (
              data.categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))
            )}
          </select>
        </div>


        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ProductAdd;
