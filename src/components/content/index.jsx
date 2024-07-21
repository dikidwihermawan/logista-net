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
        className="max-w-screen-md md:max-w-screen-2xl mx-auto h-[600px] md:h-[620px] md:bg-cover bg-no-repeat bg-[url('/public/assets/background/section1.png')]"
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
                onClick={() => handleClickScroll("why_me")}
                className="rounded-full w-full md:w-auto md:px-4 py-2 border border-[#1D214E] bg-[#1D214E] focus:outline-none hover:bg-[#1D214E] hover:bg-opacity-80 text-sm text-white"
              >
                Pelajari lebih lanjut
              </button>
            </div>
          </div>
          <div className="row-span-3 py-2 md:py-12 md:w-[600px] md:h-[600px]">
            <img src="/public/assets/section/character.png" alt="character" />
          </div>
        </div>
      </section>
      <section
        className="max-w-screen-2xl mx-auto h-[840px] md:h-[720px] bg-cover bg-no-repeat bg-[url('/public/assets/background/section2.png')]"
        id="why_me"
      >
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 items-center gap-6 justify-between mx-auto py-12 px-8 md:py-40 md:px-24">
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-6 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="/public/assets/section/easy-to-use.png"
                  alt="Easy to use"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Mudah untuk digunakan</h1>
              <span className="text-sm text-gray-600">
                Tidak sulit untuk menggunakan layanan kami, anda tinggal duduk
                bersantai hingga tim kami selesai memasangnya.
              </span>
            </div>
          </div>
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-6 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="/public/assets/section/select-package.png"
                  alt="Select Package"
                />
              </div>
              <h1 className="text-lg text-[#04D7A2]">Pilihan Paket</h1>
              <span className="text-sm text-gray-600">
                Terdapat pilihan paket sesuai dengan kebutuhan anda, yang
                pastinya harga terjangkau
              </span>
            </div>
          </div>
          <div className="h-full w-full p-12 bg-white border border-gray-300 rounded shadow-lg hover:-translate-y-6 hover:duration-300 ">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="w-36">
                <img
                  src="/public/assets/section/unlimited.png"
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
        className="max-w-screen-2xl mx-auto h-[840px] md:h-[620px] bg-cover bg-no-repeat bg-[url('/public/assets/background/section3.png')]"
        id="layanan"
      >
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 items-center justify-between mx-auto py-12 px-4 md:py-24 md:px-24">
          <div className="px-4 space-y-2">
            {/* <h1 className="text-2xl text-[#04D7A2]">Layanan</h1> */}
            <h1 className="text-2xl md:text-4xl text-white font-extrabold tracking-tight leading-none antialiased">
              Tentang Kami
            </h1>
            <div className="py-4">
              <button
                onClick={() => handleClickScroll("harga")}
                className="rounded-full w-full md:w-auto md:px-12 py-4 border border-[#04D7A2] focus:outline-none hover:bg-green-600 text-white"
              >
                Coba Sekarang
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
              <div className="border border-[#  ] p-4 rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl">
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
        className="max-w-screen-2xl mx-auto h-[720px] md:h-[620px] bg-cover bg-no-repeat bg-[url('/public/assets/background/section3.png')]"
        id="harga"
      >
        <div className="mx-auto text-center py-24 px-4">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
            Layanan Kami
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl lg:px-48">
            10 tahun efektif. sejak 2010, kami telah menerapkan pemasaran
            internet yang efektif yang menghasilkan penawaran kami.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-48">
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
        className="max-w-screen-2xl mx-auto h-[450px] md:h-[620px] bg-cover bg-no-repeat bg-[url('/public/assets/background/section4.png')]"
        id="harga"
      ></section>
    </>
  );
}

export default index;
