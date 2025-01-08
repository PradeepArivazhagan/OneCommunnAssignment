import Shapes from "../assets/Icons/Shapes.svg";
const segmentData = [
  { url: "https://i.ibb.co/9NdQBn1/Residential.png", name: "Residential" },
  { url: "https://i.ibb.co/7WwK3bg/Vector-8.png", name: "Institutional" },
  { url: "https://i.ibb.co/hVrHLW9/Vector-9.png", name: "Commercial" },
];
const Segments = () => {
  return (
    <section className="px-16 py-10">
      <div className="bg-[#D3D3D3] rounded-xl py-4 px-10 flex flex-row items-center gap-6">
        <img src={Shapes} alt="categories" />
        <h1 className="font-bold text-2xl">Segments</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {segmentData.map((eachSegment, index) => (
          <div
            key={index}
            className={`bg-[url("${eachSegment.url}")] bg-cover bg-center bg-no-repeat h-96 rounded-xl p-8 flex flex-col items-center justify-between`}
          >
            <h1 className="text-2xl font-semibold">{eachSegment.name}</h1>
            <button className="bg-black text-lg rounded-xl text-white py-2 px-16">
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Segments;
