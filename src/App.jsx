import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import "@smastrom/react-rating/style.css";
import { Route, Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import MyCart from "./Pages/Cart";
const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/item/:id" element={<ProductDetails />} />
				<Route path="/items" element={<ProductList />} />
				<Route path="/mycart" element={<MyCart />} />
			</Routes>
		</>
	);
};

export default App;
