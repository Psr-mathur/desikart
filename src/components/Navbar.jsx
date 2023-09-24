import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContextProvider";

const Navbar = () => {
	const { itemsQuantities } = useContext(CartContext);

	const [search, setSearch] = useState(null);

	const sumOfItems = itemsQuantities.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);

	return (
		<div className=" h-16 bg-slate-100">
			<div className=" py-3 px-2 sm:px-5 flex justify-between items-center">
				<div className=" flex-1 flex items-center">
					<span className="hidden sm:block text-sm cursor-pointer">
						EN
					</span>
					<div className=" border flex items-center sm:ml-6 py-1 px-2 bg-white">
						<input
							type="text"
							name="search"
							alt=""
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className=" w-[80px] sm:w-auto border-none outline-none"
							placeholder="Search.."
						/>
						<Link to={`/items?search=${search}`}>
							<Search
								style={{
									color: "gray",
									fontSize: "16px",
									marginLeft: "4px",
									marginRight: "4px",
								}}
							/>
						</Link>
					</div>
				</div>
				<div className=" flex-1 text-center">
					<Link to="/">
						<span className=" font-bold text-2xl sm:text-3xl select-none">
							DESIKART.
						</span>
					</Link>
				</div>
				<div className=" flex-1 flex gap-2 sm:gap-6 items-center justify-around sm:justify-end">
					<div className="hidden sm:block text-sm cursor-pointer">
						REGISTER
					</div>
					<div className=" text-sm cursor-pointer">SIGN IN</div>
					<div className=" text-sm cursor-pointer">
						<Link to="/mycart">
							<Badge badgeContent={sumOfItems} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
