import { tipologyData } from "../data/data";
import Button from "./Button";
import VirtualTour360 from "./VirtualTour360";


function VirtualTours() {
	return (
		<div className="bg-lightGray text-white py-[80px]">
			{
				tipologyData.map((tipology) => {
					return (
						<div className="flex flex-col items-center gap-[20px] mt-[40px] mx-auto">
							<Button>{tipology.name}</Button>
							<VirtualTour360 url={tipology.virtualTourUrl} />
						</div>
					)
				})
			}
		</div>
	);
}

export default VirtualTours;