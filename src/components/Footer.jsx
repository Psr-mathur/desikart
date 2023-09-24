import {
	EmailOutlined,
	FacebookOutlined,
	GitHub,
	Instagram,
	LocationCityOutlined,
	PhoneAndroidOutlined,
	Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
	return (
		<div className=" flex flex-col sm:flex-row bg-slate-200">
			<div className=" flex-1 p-5">
				<span className=" text-3xl font-bold">DESIKART.</span>
				<p className=" text-justify my-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ullam nemo voluptas quasi, odio ipsam harum cupiditate
					veniam error eaque temporibus aspernatur ipsum aut omnis
					deleniti quia laudantium officiis suscipit numquam.
				</p>
				<div className=" flex gap-5 items-center justify-center">
					<div className=" h-14 w-14 rounded-full flex items-center justify-center cursor-pointer text-blue-500">
						<FacebookOutlined fontSize="large" />
					</div>
					<div className=" h-14 w-14 rounded-full flex items-center justify-center cursor-pointer text-rose-500">
						<Instagram fontSize="large" />
					</div>
					<div className=" h-14 w-14 rounded-full flex items-center justify-center cursor-pointer text-black">
						<GitHub fontSize="large" />
					</div>
					<div className=" h-14 w-14 rounded-full flex items-center justify-center cursor-pointer text-blue-700">
						<Twitter fontSize="large" />
					</div>
				</div>
			</div>
			<div className=" hidden sm:block flex-1 p-5">
				<p className=" text-xl font-semibold mb-6">Useful Links</p>
				<ul className=" list-none flex flex-wrap items-center justify-center gap-y-3">
					<li className=" w-1/2 cursor-pointer">Home</li>
					<li className=" w-1/2 cursor-pointer">Cart</li>
					<li className=" w-1/2 cursor-pointer">Man's Fashion</li>
					<li className=" w-1/2 cursor-pointer">Women's Fashion</li>
					<li className=" w-1/2 cursor-pointer">My Cart</li>
					<li className=" w-1/2 cursor-pointer">My Account</li>
					<li className=" w-1/2 cursor-pointer">Wishlist</li>
					<li className=" w-1/2 cursor-pointer">
						Terms & Conditions
					</li>
				</ul>
			</div>
			<div className=" flex-1 p-5">
				<p className=" text-xl font-semibold mb-6">Contact</p>
				<p className=" flex gap-3 items-center my-4">
					<LocationCityOutlined />
					<span>Patna, Bihar</span>
				</p>
				<p className=" flex gap-3 items-center my-4">
					<PhoneAndroidOutlined />
					<span>+91 7549016390</span>
				</p>
				<p className=" flex gap-3 items-center">
					<EmailOutlined color="primary" />
					<span>Prakashkrindia@outlook.com</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
