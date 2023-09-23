import {
	MailOutlineOutlined,
	Search,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";

const Navbar = () => {
	return (
		<div className=" h-16 bg-slate-100">
			<div className=" py-3 px-5 flex justify-between items-center">
				<div className=" flex-1 flex items-center">
					<span className=" text-sm cursor-pointer">EN</span>
					<div className=" border flex items-center ml-6 py-1 px-2 bg-white">
						<input
							type="text"
							alt=""
							className=" border-none outline-none"
						/>
						<Search
							style={{
								color: "gray",
								fontSize: "16px",
								marginLeft: "4px",
								marginRight: "4px",
							}}
						/>
					</div>
				</div>
				<div className=" flex-1 text-center">
					<span className=" font-bold text-3xl select-none">
						DESIKART.
					</span>
				</div>
				<div className=" flex-1 flex gap-6 items-center justify-end">
					<div className=" text-sm cursor-pointer">REGISTER</div>
					<div className=" text-sm cursor-pointer">SIGN IN</div>
					<div className=" text-sm cursor-pointer">
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
