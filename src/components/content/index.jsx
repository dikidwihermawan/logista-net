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
        className=" max-w-screen-md md:max-w-screen-2xl mx-auto h-full md:h-[620px] md:bg-cover bg-no-repeat bg-[url('./public/assets/background/section1.png')]"
        id="home"
      >
        <div className="grid py-4 grid-cols-1 grid-rows-2 px-8 md:py-0 md:grid-cols-2 md:px-32">
          <div className="md:pt-32 md:pr-40">
            <div className="row-span-2">
              <h1 className="py-4 text-2xl font-extrabold tracking-tight leading-none text-[#1D214E] md:text-4xl lg:text-5xl">
                Solusi jaringan tepat untuk anda
              </h1>
              <p className="py-4 text-lg font-normal text-gray-600 lg:text-sm">
                Logista Net menyediakan internet yang bisa digunakan di berbagai
                platform, yang tentunya memudahkan anda untuk terhubung dengan
                siapapun.
              </p>
            </div>
            <div className="py-6 md:py-4">
              <button
                onClick={() => handleClickScroll("about_me")}
                className="rounded-full w-full md:w-auto md:px-4 py-2 border border-[#1D214E] bg-[#1D214E] focus:outline-none hover:bg-[#1D214E] hover:bg-opacity-80 text-sm text-white"
              >
                Pelajari lebih lanjut
              </button>
            </div>
          </div>
          <div className="row-span-3 py-2 md:py-12 md:w-[600px] md:h-[600px]">
            <img src="./public/assets/section/character.png" alt="character" />
          </div>
        </div>
      </section>
      <section
        className="max-w-screen-2xl mx-auto h-full md:h-[620px] bg-cover bg-no-repeat bg-[url('./public/assets/background/section2.png')]"
        id="about_me"
      >
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 items-center justify-between mx-auto py-12 px-4 md:px-24">
          <div className="py-2 md:w-[500px] md:h-[500px]">
            <img src="./public/assets/section/aboutme.png" alt="character" />
          </div>
          <div className="md:pl-24">
            <div className="px-4 space-y-6">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-none antialiased text-[#1D214E]">
                Tentang Kami
              </h1>
              <h1 className="text-md md:text-md spaci tracking-tight antialiased text-gray-600">
                Logista Net berdiri sejak tahun 2010, kami diberikan kepercayaan
                lebih oleh masyarakat sekitar. Maka dari itu kami ingin
                memasarkan layanan internet kami dengan area yang cukup luas.
              </h1>
              <div className="py-2">
                <button
                  onClick={() => handleClickScroll("layanan")}
                  className="rounded-full w-full md:w-auto md:px-4 text-sm py-2 border border-[#04D7A2] focus:outline-none hover:text-white hover:bg-[#1D214E] text-[#1D214E]"
                >
                  Cek lebih detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="max-w-screen-2xl mx-auto h-full md:h-[640px] bg-cover bg-no-repeat bg-[url('./public/assets/background/section3.png')]"
        id="layanan"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-none antialiased text-center text-[#1D214E] pt-24">
          Mengapa memilih kami ?
        </h1>
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 items-center gap-6 justify-between mx-auto py-12 md:py-16 px-8 md:px-24">
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-12 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="./public/assets/section/easy-to-use.png"
                  alt="Easy to use"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Mudah untuk digunakan</h1>
              <span className="text-sm text-gray-600">
                Tidak sulit untuk menggunakan layanan kami, anda tinggal hubungi
                tim kami & tim kami akan survei untuk melakukan proses
                instalasinya.
              </span>
            </div>
          </div>
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-12 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="./public/assets/section/select-package.png"
                  alt="Select Package"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Pilihan Paket</h1>
              <span className="text-sm text-gray-600">
                Terdapat pilihan paket sesuai dengan kebutuhan anda, dengan
                harga yang terjangkau
              </span>
            </div>
          </div>
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-12 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="./public/assets/section/unlimited.png"
                  alt="Unlimited"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Unlimited</h1>
              <span className="text-sm text-gray-600">
                Anda tidak perlu khawatir kehabisan kuota internet, karena
                layanan kami tidak ada batasan kuota maksimum.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="max-w-screen-2xl mx-auto h-full md:h-[800px] bg-cover bg-no-repeat bg-[url('./public/assets/background/section3.png')]"
        id="penawaran"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-none antialiased text-center text-[#1D214E] pt-24">
          Paket yang tersedia
        </h1>
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-4 items-center gap-6 justify-between mx-auto py-12 md:py-16 px-8 md:px-24">
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-12 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="./public/assets/section/easy-to-use.png"
                  alt="Easy to use"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Hemat</h1>
              <span className="text-sm text-gray-600">
                <ul>
                  <li>10Mbps</li>
                  <li>Unlimitied</li>
                  <li>Free Router</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-12 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="./public/assets/section/select-package.png"
                  alt="Select Package"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Pilihan Paket</h1>
              <span className="text-sm text-gray-600">
                Terdapat pilihan paket sesuai dengan kebutuhan anda, dengan
                harga yang terjangkau
              </span>
            </div>
          </div>
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-12 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="./public/assets/section/unlimited.png"
                  alt="Unlimited"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Unlimited</h1>
              <span className="text-sm text-gray-600">
                Anda tidak perlu khawatir kehabisan kuota internet, karena
                layanan kami tidak ada batasan kuota maksimum.
              </span>
            </div>
          </div>
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-12 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="./public/assets/section/select-package.png"
                  alt="Select Package"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Pilihan Paket</h1>
              <span className="text-sm text-gray-600">
                Terdapat pilihan paket sesuai dengan kebutuhan anda, dengan
                harga yang terjangkau
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
