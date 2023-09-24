import {
	CurrencyRupeeOutlined,
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
	return (
		<div className="flex-1 min-w-[275px] max-w-[400px] h-96 my-1 sm:m-2 flex flex-col items-center justify-center bg-sky-50 shadow relative group transition-all">
			<div className="h-3/4 w-[calc(100%-16px)] p-2 bg-white flex items-center justify-center ">
				<img src={item.thumbnail} alt="" className="  h-full" />
			</div>
			<div className="w-[calc(100%-16px)] py-2 peer">
				<p className="  font-semibold capitalize truncate">
					{item.title}
				</p>
				<div className=" flex items-center justify-between mt-1">
					<p className="flex items-center">
						<CurrencyRupeeOutlined style={{ fontSize: "18px" }} />
						<span className=" text-[18px]">{item.price * 72}</span>
					</p>
					<StarRating rating={item.rating >= 4.9 ? 5 : 4} />
				</div>
			</div>

			<div className=" hidden w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.15)] group-hover:flex gap-3 items-center justify-center ">
				<div className=" w-10 h-10 rounded-full bg-white cursor-pointer flex items-center justify-center transition-all duration-400 hover:bg-slate-100 hover:scale-110">
					<Link to={`/item/${item.id}`}>
						<ShoppingCartCheckoutOutlined />
					</Link>
				</div>
				<div className=" w-10 h-10 rounded-full bg-white cursor-pointer flex items-center justify-center transition-all duration-400 hover:bg-slate-100 hover:scale-110">
					<SearchOutlined />
				</div>
				<div className=" w-10 h-10 rounded-full bg-white cursor-pointer flex items-center justify-center transition-all duration-400 hover:bg-slate-100 hover:scale-110">
					<FavoriteBorderOutlined />
				</div>
			</div>
		</div>
	);
};

const Products = ({ data = [] }) => {
	return (
		<div className=" py-5 px-2 sm:p-5 flex flex-wrap justify-between">
			{data.map((item, index) => (
				<Product item={item} key={index} />
			))}
		</div>
	);
};

export default Products;
