// Header.js
import React, { useState } from "react";

const Header = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<header className="bg-blue-500 p-4 text-white shadow-md">
			<div className="container mx-auto">
				{/* Mobile Header */}
				<div className="block lg:hidden">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-semibold">My Website</h1>
						<button className="text-3xl" onClick={toggleSidebar}>
							☰
						</button>
					</div>
				</div>

				{/* Mobile Sidebar (Hidden by default) */}
				{isSidebarOpen && (
					<div className="lg:hidden">
						{/* Sidebar content goes here */}
						<nav className="bg-blue-400 p-4 absolute top-0 left-0 h-screen w-3/4 transform translate-x-0 transition-transform duration-300 ease-in-out">
							<ul className="space-y-4">
								<li>
									<a
										href="/"
										className="text-white hover:text-blue-300"
										onClick={toggleSidebar}
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="/about"
										className="text-white hover:text-blue-300"
										onClick={toggleSidebar}
									>
										About
									</a>
								</li>
								<li>
									<a
										href="/contact"
										className="text-white hover:text-blue-300"
										onClick={toggleSidebar}
									>
										Contact
									</a>
								</li>
							</ul>
						</nav>
					</div>
				)}

				{/* Desktop Header */}
				<div className="hidden lg:block">
					<div className="flex justify-between items-center">
						<h1 className="text-2xl font-semibold">My Website</h1>
						<nav>
							<ul className="flex space-x-4">
								<li>
									<a href="/" className="hover:text-blue-300">
										Home
									</a>
								</li>
								<li>
									<a
										href="/about"
										className="hover:text-blue-300"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="/contact"
										className="hover:text-blue-300"
									>
										Contact
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
