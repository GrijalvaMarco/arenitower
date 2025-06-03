import Button from "../Button";
import { Link } from "react-router-dom";

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
                <Link to="/contact">
                    <Button>Solicitar más información</Button>
                </Link>
            </div>
        </div>
    );
}

export default TypologyDetails;