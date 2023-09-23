import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { TopProductsData } from "../Data/TopProducts";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<p className=" text-5xl font-bold px-5 text-fuchsia-300">
				Top Rated Products:
			</p>
			<Products data={TopProductsData} />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
