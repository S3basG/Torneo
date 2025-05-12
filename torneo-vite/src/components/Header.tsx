export default function Header() {
  return (
    <header className="flex items-center justify-between bg-csCyan px-4 py-2 shadow-md">
      {/* Left: Hamburger Icon */}
      <div className="flex items-center gap-2">
        <button className="text-2xl text-orange-400">
          <img 
            src="/logo.png"
            alt="Home"
            className="h-full w-full object-contain"
            />
        </button>
        <div className="flex h-10 w-[2px] bg-black ml-2" />
      </div>

      {/* Navigation Buttons in center*/}
      <nav className="flex gap-2">
        <button className="rounded-md bg-csCream px-4 py-1 font-semibold text-black shadow-sm hover:bg-white">
          ABOUT
        </button>
        <button className="rounded-md  bg-csCream px-4 py-1 font-semibold text-black shadow-sm hover:bg-white">
          TOURNAMENTS
        </button>
        <button className="rounded-md bg-csCream px-4 py-1 font-semibold text-black shadow-sm hover:bg-white">
          LINKS
        </button>
        <button className="rounded-md bg-csCream px-4 py-1 font-semibold text-black shadow-sm hover:bg-white">
          TEAMS
        </button>
        <button className="rounded-md bg-csCream px-4 py-1 font-semibold text-black shadow-sm hover:bg-white">
          PROFILE
        </button>
      </nav>

      {/* Login Button*/}
      <div>
        <button className="rounded-md bg-csOrange px-4 py-1 font-semibold text-black outline-2 outline-black hover:bg-orange-500">
          LOG IN
        </button>
      </div>
    </header>
  );
}
