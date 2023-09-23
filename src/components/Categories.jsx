import { CategoriesData as CategoriesList } from "../Data/Categories";

const CategoryItem = ({ item }) => {
	return (
		<div className=" min-w-[25vw] h-[50vh] bg-slate-100 border border-red-700 relative hover:shadow">
			<img
				src={item.images[0]}
				alt=""
				className=" h-full w-full object-cover opacity-75"
			/>
			<div className=" absolute z-[2] top-0 left-0 w-full h-full flex flex-col items-center justify-center">
				<p className=" text-xl font-semibold text-white mb-3 uppercase">
					{item.category}
				</p>
				<button className=" p-3 text-lg bg-black text-white cursor-pointer border border-black hover:bg-transparent hover:text-black hover:shadow-lg transition-all duration-500">
					SHOP NOW
				</button>
			</div>
		</div>
	);
};

const Categories = () => {
	// console.log(CategoriesList);
	return (
		<div className=" flex p-5 gap-5 overflow-x-scroll scrollbar-none">
			{CategoriesList.map((item, index) => {
				return <CategoryItem key={index} item={item} />;
			})}
		</div>
	);
};

export default Categories;
