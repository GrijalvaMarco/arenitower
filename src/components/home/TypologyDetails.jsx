import Button from "../Button";

function TypologyDetails({ tipology }) {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left">
                {tipology.shortName}
            </h2>
            <div className="mt-[20px]">
                <div className="p-[10px] bg-secondary text-white text-center">
                    <span>ÁREA PONDERADA {tipology.area} M<sup>2</sup></span>
                </div>
                <div className="flex flex-col mt-[10px] gap-[10px] border border-secondary p-2">
                    <div className="flex justify-between items-center">
                        <p className="flex-1">Área Privativa:</p>
                        <div className="flex justify-end flex-1">
                            <p>{tipology.distributionArea.privateArea} M<sup>2</sup></p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="flex-1">Terraza Techada:</p>
                        <div className="flex justify-end flex-1">
                            <p>{tipology.distributionArea.coveredTerrace} M<sup>2</sup></p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="flex-1">Bodega:</p>
                        <div className="flex justify-end flex-1">
                            <p>{tipology.distributionArea.storage} M<sup>2</sup></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[20px]">
                <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg">
                    {
                        tipology.specifications.map((spec) => {
                            return (<li key={spec}>{spec}</li>);
                        })
                    }
                </ul>
            </div>
            <div className="mt-[20px] text-center sm:text-left">
                <Button>Solicitar más información</Button>
            </div>
        </div>
    );
}

export default TypologyDetails;