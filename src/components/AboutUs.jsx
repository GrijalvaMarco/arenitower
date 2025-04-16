import { aboutUsData } from "../data/data";

function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-white">
      {aboutUsData.map((el) => {
        return (
          <div
            key={el.id}
            style={{ background: `${el.bgColor}` }}
            className="text-center sm:px-[50px] sm:py-[70px] p-[30px]">
            <img src={el.image} alt={el.description} className="mx-auto" />
            <h2 className="text-2xl font-bold uppercase my-[20px]">
              {el.title}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default AboutUs;
