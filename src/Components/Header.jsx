import Logo from "../assets/Images/Logo.png";
import Search from "../assets/Icons/Search.svg";
import Person from "../assets/Icons/Person.svg";
import { useState } from "react";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const onClickMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="fixed z-10 w-full border border-black  py-4 px-8 md:px-14 lg:px-16 flex flex-row items-center justify-between bg-black">
      <div>
        <img className="w-12 md:w-16 lg:w-20" src={Logo} alt="logo" />
      </div>
      <nav className="hidden lg:flex flex-row items-center gap-2 text-white">
        <h1 className="font-semibold">Home</h1>
        <select className="w-28 focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
          <option className="text-black" value="Living">
            Living
          </option>
          <option className="text-black" value="Living">
            TV Units
          </option>
          <option className="text-black" value="Living">
            Box Shelves
          </option>
          <option className="text-black" value="Living">
            Shoe Rack
          </option>
          <option className="text-black" value="Living">
            Dressing Table
          </option>
          <option className="text-black" value="Living">
            Wardrobes
          </option>
        </select>
        <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
          <option className="text-black" value="Living">
            Storage
          </option>
        </select>
        <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
          <option className="text-black" value="Living">
            Dinning
          </option>
        </select>
        <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
          <option className="text-black" value="Living">
            Bedroom
          </option>
        </select>
        <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
          <option className="text-black" value="Living">
            Mattress
          </option>
        </select>
        <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
          <option className="text-black" value="Living">
            Study
          </option>
        </select>
        <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
          <option className="text-black" value="Living">
            Office
          </option>
        </select>
        <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
          <option className="text-black" value="Living">
            Outdoor
          </option>
        </select>
      </nav>
      <div className="lg:hidden flex flex-row items-center gap-6">
        <img className="w-5" src={Search} alt="Search" />
        <img className="w-4" src={Person} alt="Person" />
        {menu ? (
          <button onClick={onClickMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button onClick={onClickMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="hidden lg:flex flex-row items-center gap-14">
        <img src={Search} alt="Search" />
        <img src={Person} alt="Person" />
      </div>
      {menu ? (
        <nav className="absolute shadow-md h-screen top-[75px] md:top-[92px] -right-1 py-4 px-8 bg-black lg:hidden flex flex-col items-start text-white">
          <h1 className="font-semibold px-5">Home</h1>
          <select className="w-28 focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
            <option className="text-black" value="Living">
              Living
            </option>
            <option className="text-black" value="Living">
              TV Units
            </option>
            <option className="text-black" value="Living">
              Box Shelves
            </option>
            <option className="text-black" value="Living">
              Shoe Rack
            </option>
            <option className="text-black" value="Living">
              Dressing Table
            </option>
            <option className="text-black" value="Living">
              Wardrobes
            </option>
          </select>
          <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
            <option className="text-black" value="Living">
              Storage
            </option>
          </select>
          <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
            <option className="text-black" value="Living">
              Dinning
            </option>
          </select>
          <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
            <option className="text-black" value="Living">
              Bedroom
            </option>
          </select>
          <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
            <option className="text-black" value="Living">
              Mattress
            </option>
          </select>
          <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
            <option className="text-black" value="Living">
              Study
            </option>
          </select>
          <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
            <option className="text-black" value="Living">
              Office
            </option>
          </select>
          <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
            <option className="text-black" value="Living">
              Outdoor
            </option>
          </select>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
