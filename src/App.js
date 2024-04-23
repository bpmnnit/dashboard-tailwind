import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/invoices" element={<Invoices />} /> */}
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="login" element={<div>This is the login page.</div>} />
      </Routes>
    </Router>
  );
};

export default App;

// https://github.com/debargus/openshop-analytics-dashboard