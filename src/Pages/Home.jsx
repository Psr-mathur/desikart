import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { TopProductsData } from "../Data/TopProducts";
import Layout from "../Layout";

const Home = () => {
	return (
		<Layout>
			<Slider />
			<Categories />
			<p className=" text-3xl font-semibold px-2 sm:px-5 text-gray-400">
				Top Rated Products:
			</p>
			<Products data={TopProductsData} />
			<Newsletter />
		</Layout>
	);
};

export default Home;
