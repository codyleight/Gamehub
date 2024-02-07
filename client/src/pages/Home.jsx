import CategoryMenu from "../components/categoryMenu";
import ProductList from "../components/productList";
import Cart from "../components/Cart/index.jsx";


const Home = () => {
  return (
    
    <div className="">
      <div className="">
      <CategoryMenu />
      <ProductList />
      </div>
      <Cart />
    </div>
  
  );
};

export default Home;
