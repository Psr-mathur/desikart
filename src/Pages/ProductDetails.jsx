import { Add, CurrencyRupeeOutlined, Remove } from "@mui/icons-material";
import StarRating from "../components/StarRating";
import { CartContext } from "../Context/CartContextProvider";
import { useContext, useState } from "react";
import { ProductsData } from "../Data/Products";
import { Link, useLocation } from "react-router-dom";
import Layout from "../Layout";

const ProductDetails = () => {
	const { itemsIds, addItemToCart } = useContext(CartContext);
	const [quan, setQuan] = useState(1);
	const id = useLocation().pathname.split("/").pop();
	const [item] = useState(ProductsData.filter((it) => it.id == id)[0]);
	// console.log(item);
	// console.log(itemsIds);
	return (
		<Layout>
			<div className="flex flex-col sm:flex-row">
				<div className="flex-1 p-5 sm:p-10">
					<img
						src={item.thumbnail}
						alt=""
						className="w-full max-h-[70vh]"
					/>
				</div>
				<div className="flex-1 p-5 sm:p-10 border flex flex-col">
					<p className="text-2xl font-extralight capitalize">
						{item.title}
					</p>
					<p className=" my-5 font-light capitalize">
						{item.description} Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Quod nostrum amet autem,
						consectetur tempore rem nemo eos architecto vitae, ea
						modi.
					</p>
					<div className=" flex items-center justify-between">
						<p className="text-xl font-light">
							<CurrencyRupeeOutlined />
							<span>{item.price * 72}</span>
						</p>
						<div className=" flex gap-3 border px-2">
							<StarRating
								rating={
									item.rating > 4.75
										? 5
										: parseInt(item.rating)
								}
							/>
							<span>{item.rating}</span>
						</div>
					</div>
					<div>
						<button className=" my-4 block px-3 py-2 bg-purple-300 text-white font-bold text-lg cursor-default">
							{item.brand}
						</button>
						<button className=" my-4 block px-4 py-1 bg-gray-300 text-white font-semibold uppercase text-2xl cursor-default ">
							{item.stock > 0 ? "In Stock" : "Not In Stock"}
						</button>
					</div>
					<div className="w-full sm:w-1/2 flex items-center justify-between">
						<div className=" flex items-center font-semibold gap-1">
							<span
								className=" cursor-pointer"
								onClick={() =>
									setQuan((q) => (q == 1 ? 1 : q - 1))
								}
							>
								<Remove />
							</span>
							<span className="w-8 h-8 border border-teal-500 flex items-center justify-center">
								{quan}
							</span>
							<span
								className=" cursor-pointer"
								onClick={() => setQuan((q) => q + 1)}
							>
								<Add />
							</span>
						</div>
						{itemsIds.includes(id) ? (
							<Link to="/mycart">
								<button className="p-4  cursor-pointer border-[2px] text-white bg-teal-400 transition-all">
									GO TO CART
								</button>
							</Link>
						) : (
							<button
								onClick={() =>
									addItemToCart(id, quan, item.price)
								}
								className="p-4 bg-white cursor-pointer border-[2px] border-teal-500 hover:text-white hover:bg-teal-400 transition-all"
							>
								ADD TO CART
							</button>
						)}
					</div>
					<span className="mt-4 sm:mt-auto bg-slate-200 py-1 px-2 text-violet-500 w-max">
						#{item.category}
					</span>
				</div>
			</div>
		</Layout>
	);
};

export default ProductDetails;
