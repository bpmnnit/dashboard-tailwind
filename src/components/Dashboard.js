import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>This is a Dashboard!</p>
      <Link to="products" className="underline">Go to Products!</Link>
    </div>
  );
};

export default Dashboard;