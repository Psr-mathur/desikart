import { Send } from "@mui/icons-material";
import React from "react";

const Newsletter = () => {
	return (
		<div className=" h-[60vh] bg-orange-50 flex flex-col items-center justify-center">
			<p className=" text-5xl font-bold">Newsletter</p>
			<p className=" text-xl tracking-wider my-5 text-center">
				Get timely updates of your favourite products.
			</p>
			<div className=" w-1/2 min-w-[350px] bg-white flex items-center justify-between">
				<input
					type="email"
					placeholder="Your Email"
					className="p-3 bg-transparent flex-1 outline-none"
				/>
				<button className="py-3 px-8 bg-slate-600 text-white">
					<Send />
				</button>
			</div>
		</div>
	);
};

export default Newsletter;
