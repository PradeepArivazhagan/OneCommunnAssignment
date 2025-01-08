import Logo from "../assets/Images/Logo.png"
import Search from "../assets/Icons/Search.svg"
import Person from "../assets/Icons/Person.svg"
const Header = () => {
  return (
    <header className="fixed z-10 w-full border border-black px-16 flex flex-row items-center justify-between bg-black">
        <div>
            <img className="w-28" src={Logo} alt="logo"/>
        </div>
        <nav className="flex flex-row items-center gap-2 text-white">
            <h1 className="font-semibold">Home</h1>
            <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
                <option className="text-black" value="Living">Living</option>
            </select>
            <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
                <option className="text-black" value="Living">Storage</option>
            </select>
            <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
                <option className="text-black" value="Living">Dinning</option>
            </select>
            <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
                <option className="text-black" value="Living">Bedroom</option>
            </select>
            <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
                <option className="text-black" value="Living">Mattress</option>
            </select>
            <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
                <option className="text-black" value="Living">Study</option>
            </select>
            <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
                <option className="text-black" value="Living">Office</option>
            </select>
            <select className="focus:outline-none px-4 py-4 border-none bg-transparent font-semibold">
                <option className="text-black" value="Living">Outdoor</option>
            </select>
        </nav>
        <div className="flex flex-row items-center gap-14">
            <img src={Search} alt="Search" />
            <img src={Person} alt="Person" />
        </div>
    </header>
  )
}

export default Header