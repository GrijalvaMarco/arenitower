import Button from "../Button";

function TypologyDetails({ tipology }) {
    return (
        <div>
            <h2 className="text-6xl font-bold">{tipology.shortName}</h2>
            <div className="mt-[20px]">
                <div className="p-[10px] bg-secondary text-white text-center">
                    <span>ÁREA PONDERADA {tipology.area} M<sup>2</sup></span>
                </div>
                <div className="flex flex-col px-[40px] gap-[10px] border border-secondary">
                    <div className="flex mt-[10px] justify-between border border-secondary">
                        <p>Area Privativa:</p>
                        <div className="flex">
                            <p>{tipology.distributionArea.privateArea} M<sup>2</sup></p>
                        </div>
                    </div>
                    <div className="flex mt-[10px] justify-between border border-secondary">
                        <p>Terraza Techada:</p>
                        <div className="flex">
                            <p>{tipology.distributionArea.coveredTerrace} M<sup>2</sup></p>
                        </div>
                    </div>
                    <div className="flex mt-[10px] justify-between border border-secondary">
                        <p>Bodega:</p>
                        <div className="flex">
                            <p>{tipology.distributionArea.storage} M<sup>2</sup></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[20px]">
                <ul className="list-disc list-inside">
                    {
                        tipology.specifications.map((spec) => {
                            return (<li key={spec}>{spec}</li>);
                        })
                    }
                </ul>
            </div>
            <div className="mt-[20px]">
                <Button>Solicitar más información</Button>
            </div>
            {/* Agregar más detalles del tipology aquí si es necesario */}
        </div>
    );
}

export default TypologyDetails;