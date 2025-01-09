import Shapes from "../assets/Icons/Shapes.svg";
const segmentData = [
  { url: "bg-residential", name: "Residential" },
  { url: "bg-institutional", name: "Institutional" },
  { url: "bg-commercial", name: "Commercial" },
];
const Segments = () => {
  return (
    <section className="px-4 md:px-14 lg:px-16 py-4 md:py-6 lg:py-10">
      <div className="bg-[#D3D3D3] rounded-md md:rounded-xl py-4 px-6 md:px-10 flex flex-row items-center gap-4 md:gap-6">
        <img src={Shapes} alt="categories" />
        <h1 className="font-bold text-lg md:text-xl ld:text-2xl">Segments</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mt-6 md:mt-8">
        {segmentData.map((eachSegment, index) => (
          <div
            key={index}
            className={`${eachSegment.url} opacity-85 bg-cover bg-center bg-no-repeat h-72 lg:h-96 rounded-xl p-8 flex flex-col items-center justify-between`}
          >
            <h1 className="text-xl md:text-2xl font-bold">{eachSegment.name}</h1>
            <button className="bg-black md:text-base lg:text-lg rounded-xl text-white py-2 px-8 md:px-12 lg:px-16">
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Segments;
