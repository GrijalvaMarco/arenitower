import Container from "../Container";
import VirtualTours from "../VirtualTours";
import MainHead from "../mainHead/MainHead";

function VirtualToursSection() {
	return (
		<div className="bg-lightGray text-white py-[80px]">
			<Container>
				<MainHead>Tours</MainHead>
				<VirtualTours />
			</Container>
		</div>
	);
}

export default VirtualToursSection;