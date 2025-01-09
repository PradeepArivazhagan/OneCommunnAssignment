import banner from "../assets/Images/Banner.png"
const Banner = () => {
  return (
    <section>
        <img className="mx-auto pt-[90px] md:pt-32 lg:pt-36 px-2 md:px-14 lg:px-16 w-full" src={banner} alt="Banner" />
    </section>
  )
}

export default Banner