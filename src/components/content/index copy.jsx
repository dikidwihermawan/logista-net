import {
  IconBrandSpeedtest,
  IconCalendarStats,
  IconCash,
  IconNetwork,
  IconNumber10Small,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
function index() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section
        className="bg-cover bg-no-repeat bg-[url('/public/assets/section/section1.png')]"
        id="home"
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={() => handleClickScroll("home")}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./assets/logo.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
              LogistaNet
            </span>
          </button>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <button
                  onClick={() => handleClickScroll("home")}
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClickScroll("services")}
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClickScroll("pricing")}
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClickScroll("contact")}
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto text-center min-h-screen py-56 px-4 md:py-24 md:px-24">
          <h1 className="mb-4 px-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl">
            Kami berusaha membuat anda lebih mudah terhubung dengan siapapun
          </h1>
          <p className="mb-8 px-4 text-lg font-normal text-gray-300 lg:text-xl lg:px-48">
            Fokus kita membuat orang yang jauh dari anda, menjadi lebih dekat.
          </p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 px-8">
            <button
              onClick={() => handleClickScroll("pricing")}
              className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Dapatkan segera
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            <button
              onClick={() => handleClickScroll("services")}
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Pelajari lebih lanjut
            </button>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-no-repeat bg-[url('/public/assets/section/section2.png')]"
        id="services"
      >
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 items-center justify-between mx-auto min-h-screen py-32 px-4 md:py-36 md:px-24">
          <div className="relative -top-16 md:static px-4 space-y-2">
            <h1 className="text-2xl text-[#04D7A2]">Services</h1>
            <h1 className="text-4xl text-white font-extrabold tracking-tight leading-none antialiased">
              Tentang Kami
            </h1>
            <div className="pt-8">
              <button
                onClick={() => handleClickScroll("pricing")}
                className="rounded-full w-full md:w-auto md:px-12 py-4 border border-[#04D7A2] focus:outline-none hover:bg-green-600 text-white"
              >
                Order Sekarang
              </button>
            </div>
          </div>
          <div className="col-span-2 px-4 space-y-6">
            <h1 className="text-white text-lg">
              Kami memulai ini dengan koneksi-koneksi terdekat. Seiring
              berjalannya waktu, kami dipercaya oleh masyarakat sehingga kami
              ingin mencoba layanan ini ke ranah yang cukup luas
            </h1>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="border border-[#04D7A2] p-4 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl">
                <div className="flex flex-col items-center space-y-2">
                  <IconCalendarStats
                    stroke={1}
                    width={40}
                    height={40}
                    color="#FFFFFF"
                  />
                  <h1 className="text-lg text-white">Pengalaman</h1>
                  <span className="text-sm text-white">
                    10 Tahun lebih kita sudah bergelut di bidang ini
                  </span>
                </div>
              </div>
              <div className="border border-[#04D7A2] p-4 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl">
                <div className="flex flex-col items-center space-y-2">
                  <IconUsers
                    stroke={1}
                    width={40}
                    height={40}
                    color="#FFFFFF"
                  />
                  <h1 className="text-lg text-white">Pegguna</h1>
                  <span className="text-sm text-white">
                    Lebih dari 100+ pengguna yang terdaftar
                  </span>
                </div>
              </div>
              <div className="border border-[#04D7A2] p-4 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl">
                <div className="flex flex-col items-center space-y-2">
                  <IconCash stroke={1} width={40} height={40} color="#FFFFFF" />
                  <h1 className="text-lg text-white">Harga</h1>
                  <span className="text-sm text-white">
                    Harga yang ekonomis
                  </span>
                </div>
              </div>
              <div className="border border-[#04D7A2] p-4 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl">
                <div className="flex flex-col items-center space-y-2">
                  <IconNetwork
                    stroke={1}
                    width={40}
                    height={40}
                    color="#FFFFFF"
                  />
                  <h1 className="text-lg text-white">Jaringan</h1>
                  <span className="text-sm text-white">
                    Akses lebih banyak di berbagai perangkat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-no-repeat bg-[url('/public/assets/section/section3.png')]"
        id="pricing"
      >
        <div className="mx-auto text-center py-48 md:max-h-screen px-4">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
            Layanan Kami
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl lg:px-48">
            10 tahun efektif. sejak 2010, kami telah menerapkan pemasaran
            internet yang efektif yang menghasilkan penawaran kami.
          </p>
          <div className="grid grid-cols-2 place-content-center md:grid-cols-4 gap-4 md:px-48">
            <div className="w-full max-w-sm rounded-lg">
              <div className="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconNumber10Small stroke={2} width={40} height={40} />
                </div>
                <h5 className="mb-1 text-xl font-medium">Experience</h5>
                <span className="text-sm text-gray-500">
                  10 tahun sudah kita menyediakan layanan ini.
                </span>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-lg">
              <div className="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconUsers stroke={2} width={40} height={40} />
                </div>
                <h5 className="mb-1 text-xl font-medium">Customer</h5>
                <span className="text-sm text-gray-500">
                  Lebih dari 100+ pengguna yang terdaftar
                </span>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-lg">
              <div className="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconBrandSpeedtest stroke={2} width={40} height={40} />
                </div>
                <h5 className="mb-1 text-xl font-medium">Unlimited</h5>
                <span className="text-sm text-gray-500">
                  Tidak ada batasan kuota.
                </span>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-lg">
              <div className="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconRocket stroke={2} width={40} height={40} />
                </div>
                <h5 className="mb-1 text-xl font-medium">Bandwith</h5>
                <span className="text-sm text-gray-500">Up to 30mbps.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-no-repeat bg-[url('/public/assets/section/section4.png')]"
        id="contact"
      ></section>
    </>
  );
}

export default index;
