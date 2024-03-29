import { useEffect } from 'react';
import ProductItem from './productItem.jsx';
import { useStoreContext } from '../utils/GlobalState.jsx';
import { UPDATE_PRODUCTS } from '../utils/actions.js';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries.js';
import { idbPromise } from '../utils/helpers.js';
import spinner from '../assets/spinner.gif';

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2 text-warning">
      <h2 className='text-center '>Games:</h2>
      {state.products.length ? (
        <div className="row justify-content-center">
          {filterProducts().map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3">
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            </div>
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
