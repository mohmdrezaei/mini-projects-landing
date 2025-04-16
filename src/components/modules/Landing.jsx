import landing from "/images/landing.svg";
function Landing() {
  return (
    <div className="flex justify-center  lg:justify-between lg:w-[1150px] m-auto mt-12 ">
      <div className="mt-10 lg:mt-36 w-[400px] lg:text-left">
        <h1 className="text-4xl font-[700]">
          We create High quality & creative design
        </h1>
        <p className="mt-7 font-[400] ">
          Build a strong digital presence with a custom, optimized website
          design. Our expert team will create a fast, attractive, and
          mobile-friendly website for you using the latest technologies.
        </p>
        <button className="bg-[#d880a6] mt-7 text-white rounded-2xl py-2 px-9 font-[400]">
          Learn More...
        </button>
      </div>
      <img
        className="w-[600px] lg:flex justify-start hidden"
        src={landing}
        alt="landing"
      />
    </div>
  );
}

export default Landing;
