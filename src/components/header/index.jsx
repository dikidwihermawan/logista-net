import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu((e) => (e = !e));
  };

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-[#FFFFFF] sticky top-0 max-w-screen-2xl flex flex-wrap items-center justify-between shadow-sm mx-auto p-4 md:px-12 md:py-4 border-b border-b-gray-300 z-10">
        <button
          onClick={() => handleClickScroll("home")}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./assets/logo.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-xl text-[#1D214E] font-semibold whitespace-nowrap dark:text-white">
            LogistaNet
          </span>
        </button>
        <button
          onClick={handleOpenMenu}
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg text-[#1D214E] md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            openMenu ? "" : "hidden"
          } w-full md:block md:w-auto text-sm`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <button
                onClick={() => handleClickScroll("home")}
                className="block py-2 px-3 md:p-0 text-[#1D214E] text-start w-full hover:bg-white hover:text-black md:text-[#1D214E] rounded md:hover:bg-transparent md:hover:text-blue-600"
                aria-current="page"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClickScroll("layanan")}
                className="block py-2 px-3 md:p-0 text-[#1D214E] text-start w-full hover:bg-white hover:text-black md:text-[#1D214E] rounded md:hover:bg-transparent md:hover:text-blue-600"
              >
                Layanan
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClickScroll("harga")}
                className="block py-2 px-3 md:p-0 text-[#1D214E] text-start w-full hover:bg-white hover:text-black md:text-[#1D214E] rounded md:hover:bg-transparent md:hover:text-blue-600"
              >
                Penawaran
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClickScroll("kontak")}
                className="block py-2 px-3 md:p-0 text-[#1D214E] text-start w-full hover:bg-white hover:text-black md:text-[#1D214E] rounded md:hover:bg-transparent md:hover:text-blue-600"
              >
                Kontak
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
