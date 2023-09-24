import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { ProductsData } from "../Data/Products";
import { CategoriesData } from "../Data/Categories";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../Layout";

const Select = ({ data, distext }) => {
	return (
		<select
			name={distext}
			id=""
			className=" shadow p-3 scrollbar-thin scrollbar-thumb-cyan-100 outline-none sm:mx-3"
		>
			<option className="" value="" disabled selected>
				{distext}
			</option>
			{data.map((val, ind) => (
				<option key={ind} value={val} className=" capitalize">
					{val}
				</option>
			))}
		</select>
	);
};

const ProductList = () => {
	const RatingArray = ["> 1", "> 2", "> 3", "> 4", "5"];
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const Qcategory = queryParams.get("category");
	const Qsearch = queryParams.get("search");
	const [dataList, setDataList] = useState(ProductsData);
	console.log(Qsearch, Qcategory);
	useEffect(() => {
		if (Qcategory) {
			const filteredList = dataList.filter(
				(it) => it.category == Qcategory
			);
			setDataList(filteredList);
		}
		if (Qsearch && Qsearch != "null") {
			const filteredList = dataList.filter(
				(it) =>
					it.category == Qsearch ||
					it.title.toLowerCase().includes(Qsearch.toLowerCase()) ||
					it.description.toLowerCase().includes(Qsearch.toLowerCase())
			);
			setDataList(filteredList);
		}
	}, []);
	return (
		<Layout>
			<p className="m-5 text-2xl font-bold">Title</p>
			<div className=" flex justify-between">
				<div className=" flex flex-col sm:block mx-5 sm:m-5">
					<span className=" text-xl font-semibold mb-2 sm:mb-0">
						Filter Products:
					</span>
					{!Qcategory && (
						<Select
							data={CategoriesData.map((cat) => cat.category)}
							distext="Categories"
						/>
					)}
					<Select data={RatingArray} distext="Rating" />
				</div>
				<div className="flex flex-col sm:block mx-5 sm:m-5">
					<span className=" text-xl font-semibold">
						Sort Products:
					</span>
				</div>
			</div>
			<Products data={dataList} />
			<Newsletter />
		</Layout>
	);
};

export default ProductList;
