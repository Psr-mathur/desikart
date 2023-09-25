import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { ProductsData } from "../Data/Products";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../Layout";

const Select = ({ data, distext, handleChangeFilterBy }) => {
	// console.log(filterby);
	// console.log(filterby[distext]);
	return (
		<select
			name={distext}
			id=""
			onChange={handleChangeFilterBy}
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

	const [dataToShow, setDataToShow] = useState(dataList);

	const [filterby, setFilterby] = useState({
		Categories: null,
		Price: null,
		Rating: null,
	});

	const handleChangeFilterBy = (e) => {
		setFilterby({ ...filterby, [e.target.name]: e.target.value });
	};
	// console.log(Qsearch, Qcategory);
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

	useEffect(() => {
		let newList = [...dataList];
		if (filterby["Categories"]) {
			newList = ProductsData.filter(
				(it) => it.category == filterby["Categories"]
			);
			// setDataList(newList);
		}
		if (filterby["Rating"]) {
			const numberString = filterby["Rating"].match(/\d+/);
			const rat = parseInt(numberString[0], 10);
			newList = newList.filter((it) => it.rating >= rat);
			// setDataList(newList);
		}
		if (filterby["Price"]) {
			if (filterby["Price"] == "Low To High") {
				const sortedProducts = newList.sort(
					(a, b) => a.price - b.price
				);
				// setDataList(sortedProducts);
			} else {
				const sortedProducts = newList.sort(
					(a, b) => b.price - a.price
				);
				// setDataList(sortedProducts);
			}
		}
		setDataToShow(newList);
	}, [filterby["Categories"], filterby["Price"], filterby["Rating"]]);

	// console.log(filterby);
	return (
		<Layout>
			<p className="hidden m-5 text-2xl font-bold">Title</p>
			<div className=" flex justify-between">
				<div className=" sm:block mx-5 sm:m-5">
					<span className=" text-xl font-semibold mb-2">
						Filter Products:
					</span>
					<div className=" flex gap-2 text-xs sm:text-base">
						<Select
							handleChangeFilterBy={handleChangeFilterBy}
							data={[
								...new Set(
									ProductsData.map((cat) => cat.category)
								),
							]}
							distext="Categories"
						/>
						<Select
							handleChangeFilterBy={handleChangeFilterBy}
							data={["Low To High", "High To Low"]}
							distext="Price"
						/>

						<Select
							handleChangeFilterBy={handleChangeFilterBy}
							data={RatingArray}
							distext="Rating"
						/>
					</div>
				</div>
				{/* <div className="flex flex-col sm:block mx-5 sm:m-5">
					<span className=" text-xl font-semibold">
						Sort Products:
					</span>
				</div> */}
			</div>
			<Products data={dataToShow} />
			<Newsletter />
		</Layout>
	);
};

export default ProductList;
