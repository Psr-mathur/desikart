import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const sliderData = [
	{
		id: 1,
		img: "https://shorturl.at/jwAE9",
		title: "WINTER SALE",
		desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
		bg: "#e8e8e8",
	},
	{
		id: 2,
		img: "https://shorturl.at/vwxC9",
		title: "SUMMER SALE",
		desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
		bg: "#f1dec0",
	},
	{
		id: 3,
		img: "https://shorturl.at/uBTX4",
		title: "SPRING SALE",
		desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
		bg: "#aeaeae",
	},
];

const SliderContent = ({ img, title, desc, bg }) => {
	return (
		<div
			className=" w-screen flex items-center"
			style={{ backgroundColor: bg }}
		>
			<div className=" flex-1 p-12 flex items-center justify-center">
				<img src={img} />
			</div>
			<div className=" flex-1 p-12">
				<p className=" text-[72px]">{title}</p>
				<p className=" my-12 text-lg tracking-widest font-medium">
					{desc}
				</p>
				<Link to="/items">
					<button className=" p-3 text-lg bg-transparent cursor-pointer border border-black hover:bg-black hover:text-white hover:shadow-lg transition-all duration-500">
						SHOP NOW
					</button>
				</Link>
			</div>
		</div>
	);
};

const Slider = () => {
	const [sliderItemIndex, setSliderItemIndex] = useState(1);

	const handleLeftClick = () => {
		setSliderItemIndex((prev) => (prev > 1 ? prev - 1 : sliderData.length));
	};

	const handleRightClick = () => {
		setSliderItemIndex((prev) => (prev < sliderData.length ? prev + 1 : 1));
	};

	const translateXValue = `calc(${(sliderItemIndex - 1) * -100}vw)`;

	return (
		<div className=" hidden w-full h-[calc(100vh-125px)] sm:flex relative overflow-hidden">
			<div
				onClick={handleLeftClick}
				className=" w-12 h-12 bg-red-50 rounded-full flex items-center justify-center absolute m-auto top-0 bottom-0 left-3 cursor-pointer opacity-30 z-[2]"
			>
				<ArrowLeftOutlined />
			</div>
			<div
				onClick={handleRightClick}
				className=" w-12 h-12 bg-red-50 rounded-full flex items-center justify-center absolute m-auto top-0 bottom-0 right-3 cursor-pointer opacity-30 z-[2]"
			>
				<ArrowRightOutlined />
			</div>
			<div
				className=" h-full flex transition-all duration-1000"
				style={{ transform: `translateX(${translateXValue})` }}
			>
				{sliderData.map((val) => {
					return (
						<SliderContent
							key={val.id}
							img={val.img}
							title={val.title}
							desc={val.desc}
							bg={val.bg}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Slider;
