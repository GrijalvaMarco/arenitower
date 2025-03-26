import VirtualTours from "../VirtualTours";
import Container from "../Container";
import MainHead from "../mainHead/MainHead";
import ApartmentAmenities from "./ApartmentAmenities";
import { apartmentsData } from "../../data/data";
import VirtualTourVideo from "./VirtualTourVideo";

const amenitiesImages = apartmentsData.map((apartment) => ({ image: apartment.image }));

const communities = [
    "Community 1",
    "Community 2",
    "Community 3",
    "Community 4"
];

function VirtualToursSection() {
	return (
		<div className="bg-lightGray text-white py-[80px]">
			<Container>
				<MainHead>Tours</MainHead>
			</Container>
			<VirtualTours />
			<VirtualTourVideo />
			<ApartmentAmenities amenitiesImages={amenitiesImages} communities={communities}/>
		</div>
	);
}

export default VirtualToursSection;