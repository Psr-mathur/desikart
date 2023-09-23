import { Rating, ThinStar } from "@smastrom/react-rating";

const StarRating = ({ rating = 3 }) => {
	const myStyles = {
		itemShapes: ThinStar,
		activeFillColor: "#ffb700",
		inactiveFillColor: "#fff",
	};
	return (
		<Rating
			style={{ maxWidth: 100 }}
			value={rating}
			itemStyles={myStyles}
		/>
	);
};

export default StarRating;
