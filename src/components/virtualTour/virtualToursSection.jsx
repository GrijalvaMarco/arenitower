import VirtualTours from "../VirtualTours";
import Container from "../Container";
import MainHead from "../mainHead/MainHead";

function VirtualToursSection() {
	return (
		<div className="bg-lightGray text-white py-[80px]">
			<Container>
				<MainHead>Tours</MainHead>
			</Container>
			<VirtualTours />
		</div>
	);
}

export default VirtualToursSection;