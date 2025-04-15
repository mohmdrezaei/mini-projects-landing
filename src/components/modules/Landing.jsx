
import landing from "/images/landing.svg";
function Landing() {
  return (
    <div className="flex  justify-between w-[1100px] m-auto mt-12">
    <div className="mt-40 w-[400px] text-left">
      <h1 className="text-4xl font-[700]">
        We create High quality & creative design
      </h1>
      <p className="mt-7 font-[400]">
        Build a strong digital presence with a custom, optimized website
        design. Our expert team will create a fast, attractive, and
        mobile-friendly website for you using the latest technologies.
      </p>
      <button className="bg-[#d880a6] mt-7 text-white rounded-2xl py-2 px-9 font-[400]">
        Learn More...
      </button>
    </div>
    <img
      className="w-[600px] flex justify-start"
      src={landing}
      alt="landing"
    />
  </div>
  )
}

export default Landing