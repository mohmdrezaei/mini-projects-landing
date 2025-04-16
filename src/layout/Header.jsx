import profile from "/images/profile2.png"
function Header() {
  return (
    <header className="sticky top-2 z-30 m-auto lg:w-[1200px] md:top-6 w-auto">
      <div className="">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center">
            <h1 className="font-[600] text-xl">Logo</h1>
          </div>
          <div>
       <img className="md:hidden" width="40" src={profile} alt="profile" />
          </div>
          <ul className="md:flex flex-1 items-center justify-end gap-3 hidden">
            <li>
              <button className="px-5 py-1 rounded-lg shadow-sm cursor-pointer font-[500]">
                Login
              </button>
            </li>
            <li>
              <button
                className="px-5 py-1 rounded-lg shadow-sm bg-[#263238] text-white 
                cursor-pointer font-[500]"
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
