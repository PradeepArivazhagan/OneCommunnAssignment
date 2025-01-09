import Product from "../assets/Icons/Product.svg";

const Trending = () => {
  return (
    <section className="px-4 md:px-14 lg:px-16 py-4 md:py-6 lg:py-10">
      <div className=" bg-[#D3D3D3] rounded-md md:rounded-xl py-4 px-6 md:px-10 flex flex-row items-center gap-4 md:gap-6">
        <img src={Product} alt="product" />
        <h1 className="font-bold text-lg md:text-xl ld:text-2xl">Trending Products</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8">
        <div className="group relative bg-[#D3D3D3] rounded-xl">
          <div
            className={`bg-bed bg-no-repeat bg-cover group-hover:opacity-80 h-40 md:h-48 flex flex-row items-center justify-center rounded-xl`}
          >
            <button
              className="transition transform 
            translate-y-8 ease-in-out invisible 
            absolute group-hover:visible py-3 px-8 rounded-xl bg-black
            text-white group-hover:translate-y-0"
            >
              Enquire Now
            </button>
          </div>
          <div className="rounded-b-md pt-4 px-4 pb-4 lg:pb-10">
            <h1 className="text-[#030303]">Luxury Bed Set</h1>
          </div>
        </div>
        <div className="group relative bg-[#D3D3D3] rounded-xl">
          <div
            className={`bg-sofa bg-no-repeat bg-cover group-hover:opacity-80 h-40 md:h-48 flex flex-row items-center justify-center rounded-xl`}
          >
            <button
              className="transition transform 
            translate-y-8 ease-in-out invisible 
            absolute group-hover:visible py-3 px-8 rounded-xl bg-black
            text-white group-hover:translate-y-0"
            >
              Enquire Now
            </button>
          </div>
          <div className="rounded-b-md pt-4 px-4 pb-4 lg:pb-10">
            <h1 className="text-[#030303]">Luxury Sofa Set</h1>
          </div>
        </div>
        <div className="group relative bg-[#D3D3D3] rounded-xl">
          <div
            className={`bg-dinning bg-no-repeat bg-cover group-hover:opacity-80 h-40 md:h-48 flex flex-row items-center justify-center rounded-xl`}
          >
            <button
              className="transition transform 
            translate-y-8 ease-in-out invisible 
            absolute group-hover:visible py-3 px-8 rounded-xl bg-black
            text-white group-hover:translate-y-0"
            >
              Enquire Now
            </button>
          </div>
          <div className="rounded-b-md pt-4 px-4 pb-4 lg:pb-10">
            <h1 className="text-[#030303]">Luxury Dinning Table</h1>
          </div>
        </div>
        <div className="group relative bg-[#D3D3D3] rounded-xl">
          <div
            className={`bg-bed1 bg-no-repeat bg-cover group-hover:opacity-80 h-40 md:h-48 flex flex-row items-center justify-center rounded-xl`}
          >
            <button
              className="transition transform 
            translate-y-8 ease-in-out invisible 
            absolute group-hover:visible py-3 px-8 rounded-xl bg-black
            text-white group-hover:translate-y-0"
            >
              Enquire Now
            </button>
          </div>
          <div className="rounded-b-md pt-4 px-4 pb-4 lg:pb-10">
            <h1 className="text-[#030303]">Luxury Bed Set</h1>
          </div>
        </div>
        <div className="group relative bg-[#D3D3D3] rounded-xl">
          <div
            className={`bg-candle bg-no-repeat bg-cover group-hover:opacity-80 h-40 md:h-48 flex flex-row items-center justify-center rounded-xl`}
          >
            <button
              className="transition transform 
            translate-y-8 ease-in-out invisible 
            absolute group-hover:visible py-3 px-8 rounded-xl bg-black
            text-white group-hover:translate-y-0"
            >
              Enquire Now
            </button>
          </div>
          <div className="rounded-b-md pt-4 px-4 pb-4 lg:pb-10">
            <h1 className="text-[#030303]">Elegant Candle Set</h1>
          </div>
        </div>
        <div className="group relative bg-[#D3D3D3] rounded-xl">
          <div
            className={`bg-elegant bg-no-repeat bg-cover group-hover:opacity-80 h-40 md:h-48 flex flex-row items-center justify-center rounded-xl`}
          >
            <button
              className="transition transform 
            translate-y-8 ease-in-out invisible 
            absolute group-hover:visible py-3 px-8 rounded-xl bg-black
            text-white group-hover:translate-y-0"
            >
              Enquire Now
            </button>
          </div>
          <div className="rounded-b-md pt-4 px-4 pb-4 lg:pb-10">
            <h1 className="text-[#030303]">Elegant Sofa Set</h1>
          </div>
        </div>
        <div className="group relative bg-[#D3D3D3] rounded-xl">
          <div
            className={`bg-fruit bg-no-repeat bg-cover group-hover:opacity-80 h-40 md:h-48 flex flex-row items-center justify-center rounded-xl`}
          >
            <button
              className="transition transform 
            translate-y-8 ease-in-out invisible 
            absolute group-hover:visible py-3 px-8 rounded-xl bg-black
            text-white group-hover:translate-y-0"
            >
              Enquire Now
            </button>
          </div>
          <div className="rounded-b-md pt-4 px-4 pb-4 lg:pb-10">
            <h1 className="text-[#030303]">Fruit Platter</h1>
          </div>
        </div>
        <div className="group relative bg-[#D3D3D3] rounded-xl">
          <div
            className={`bg-candle bg-no-repeat bg-cover group-hover:opacity-80 h-40 md:h-48 flex flex-row items-center justify-center rounded-xl`}
          >
            <button
              className="transition transform 
            translate-y-8 ease-in-out invisible 
            absolute group-hover:visible py-3 px-8 rounded-xl bg-black
            text-white group-hover:translate-y-0"
            >
              Enquire Now
            </button>
          </div>
          <div className="rounded-b-md pt-4 px-4 pb-4 lg:pb-10">
            <h1 className="text-[#030303]">Elegant Candle Set</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
