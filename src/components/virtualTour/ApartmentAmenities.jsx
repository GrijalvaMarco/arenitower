import ImageCarousel from '../ImageCarousel';

function ApartmentAmenities({ amenitiesImages, communities }) {

    return (
        <div className="bg-secondary text-white py-[80px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-[90vh]">
                    <ImageCarousel images={amenitiesImages} />
                </div>

                {/* Communities List */}
                <div className="communities-list">
                    <h2 className="text-2xl font-bold mb-4">Communities</h2>
                    <ul className="list-disc list-inside">
                        {communities.map((community, index) => (
                            <li key={index} className="mb-2">
                                {community}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ApartmentAmenities;