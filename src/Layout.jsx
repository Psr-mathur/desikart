import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const Layout = ({ children }) => {
	return (
		<div className="">
			<div className="sticky top-0 z-20">
				<Navbar />
				<Announcement />
			</div>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
