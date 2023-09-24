import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<Announcement />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
