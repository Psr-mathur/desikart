import { Add, CurrencyRupeeOutlined, Remove } from "@mui/icons-material";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContextProvider";
import { ProductsData } from "../Data/Products";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const CartItem = ({ index, id }) => {
	const { decrementQn, incrementQn, itemsQuantities } =
		useContext(CartContext);
	const [item] = useState(ProductsData.filter((it) => it.id == id)[0]);
	return (
		<div className=" flex justify-between border mb-4 max-h-[125px]">
			<div className="flex-[2] flex">
				<img
					src={item.thumbnail}
					alt=""
					className=" w-24 sm:w-52 p-2"
				/>
				<div className="p-5 flex flex-col gap-2 sm:gap-0 justify-around">
					<p className=" capitalize text-justify">
						<b className="hidden sm:inline-block">Product: </b>
						{item.title}
					</p>
					<div className="flex justify-between gap-7">
						<p>
							<b>ID: </b>
							{id}
						</p>
						<p>
							<b>Price: ₹ </b>
							{item.price * 72}
						</p>
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center gap-5">
				<div className="flex gap-1 items-center">
					<span
						className="cursor-pointer"
						onClick={() => decrementQn(id)}
					>
						<Remove />
					</span>
					<span className="min-h-[24px] min-w-[24px] border border-teal-200 flex items-center justify-center">
						{itemsQuantities[index]}
					</span>
					<span
						className="cursor-pointer"
						onClick={() => incrementQn(id)}
					>
						<Add />
					</span>
				</div>
				<p className=" text-xl">
					<b>₹&nbsp;</b>
					<span>{itemsQuantities[index] * item.price * 72}</span>
				</p>
			</div>
		</div>
	);
};

const MyCart = () => {
	const { itemsIds, itemsQuantities, itemsPrices } = useContext(CartContext);

	const sumOfItems = itemsQuantities.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);

	let subTotal = itemsQuantities.reduce((accumulator, Quan, index) => {
		return (
			accumulator + parseFloat(Quan) * 72 * parseFloat(itemsPrices[index])
		);
	}, 0);

	// console.log(subTotal);

	return (
		<Layout>
			<div className=" px-2 py-5 sm:p-5">
				<p className="text-2xl font-light text-center">YOUR BAG</p>
				<div className="flex items-center justify-between text-sm sm:text-base">
					<Link to="/items">
						<button className=" p-2 font-semibold border-[2px] border-black">
							CONTINUE SHOPPING
						</button>
					</Link>
					<div className="flex flex-col sm:flex-row">
						<span className="text-center underline cursor-pointer mx-2">
							Shopping Bag ({sumOfItems})
						</span>
						<span className="text-center underline cursor-pointer mx-2">
							Your Wishlist (01)
						</span>
					</div>
					<button className=" p-2 font-semibold bg-black text-white border-[2px] border-black">
						CHECKOUT NOW
					</button>
				</div>
				<div className="flex flex-col sm:flex-row justify-between py-5 gap-5">
					{itemsIds.length > 0 ? (
						<>
							<div className="flex-[3]">
								{itemsIds.map((id, ind) => (
									<CartItem key={ind} id={id} index={ind} />
								))}
							</div>
							<div className="flex-1 border p-5 mb-4 h-max sm:self-end">
								<p className="text-2xl font-extralight">
									ORDER SUMMARY
								</p>
								<div className="my-6 flex justify-between">
									<p>Subtotal</p>
									<p>
										₹ <span>{subTotal}</span>
									</p>
								</div>
								<div className="my-6 flex justify-between">
									<p>Estimated Shipping</p>
									<p>
										₹ <span>40</span>
									</p>
								</div>
								<div className="my-6 flex justify-between">
									<p>Discount</p>
									<p>
										₹ <span>-40</span>
									</p>
								</div>
								<div className="my-6 flex justify-between font-semibold text-2xl">
									<p>Total</p>
									<p className="flex items-center">
										<CurrencyRupeeOutlined fontSize="medium" />
										<span>{subTotal}</span>
									</p>
								</div>
								<button className="w-full p-3 bg-black text-white font-semibold uppercase">
									Checkout Now
								</button>
							</div>
						</>
					) : (
						<div className="w-full my-5 text-center font-semibold text-lg">
							Cart is Empty!
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default MyCart;
