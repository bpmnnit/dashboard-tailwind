import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <p>This is Products!</p>
      <Link to="/" className="underline">go to Home/Dashboard!</Link>
    </div>
  );
};

export default Products;