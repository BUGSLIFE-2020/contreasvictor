export default function Navbar() {
    return (
        <nav className="flex flex-wrap items-center justify-between p-5 bg-red-800">
        <h2 className="text-black text-3xl cursor-pointer">Victor Contreras</h2>
        <div className="flex md:hidden">
          <button className="outline-none" id="hamburger">
            <img className="toggle block" src="../img/hamburger/menuClosed.png" width="40" height="40" />
            <img className="toggle hidden" src="../img/hamburger/menuOpen.png" width="40" height="40" />
          </button>
        </div>
        <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold">
          <a href="#intro" className="block md:inline-block text-black hover:text-white px-3 py-3 text-lg border-b-2 border-blue-900 md:border-none outline-none">Introduction</a>
          <a href="#about" className="block md:inline-block text-black px-3 py-3 hover:text-white text-lg border-b-2 border-blue-900 md:border-none outline-none">About Me</a>
          <a href="#resume" className="block md:inline-block text-black px-3 py-3 hover:text-white text-lg border-b-2 border-blue-900 md:border-none outline-none">Resume</a>
          <a href="#contact" className="block md:inline-block text-black px-3 py-3 hover:text-white text-lg border-b-2 border-blue-900 md:border-none outline-none">Contact</a>
        </div>
      </nav>      
    )
}