import {
  IconBrandSpeedtest,
  IconNumber10Small,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
function index() {
  return (
    <>
      <section className="bg-[#02336A] bg-blend-multiply">
        <div className="mx-auto text-center py-24 md:pt-36">
          <h1 className="mb-4 px-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">
            Kami berusaha membuat anda lebih mudah terhubung dengan siapapun
          </h1>
          <p className="mb-8 px-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Fokus kita membuat orang yang jauh dari anda, menjadi lebih dekat.
          </p>
          <div className="flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 px-8">
            <a
              href="#"
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
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Pelajari lebih lanjut
            </a>
          </div>
        </div>
        <svg viewBox="0 0 1440 320">
          <path
            fill="#EEF1F5"
            fill-opacity="1"
            d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,144C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="bg-[#EEF1F5] bg-blend-multiply" id="services">
        <div className="mx-auto text-center py-12 md:py-24 px-4">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-[#02336A] md:text-4xl lg:text-5xl">
            Fitur Kami
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl lg:px-48">
            10 tahun efektif. sejak 2010, kami telah menerapkan pemasaran
            internet yang efektif yang menghasilkan penawaran kami.
          </p>
          <div class="grid grid-cols-2 place-content-center md:grid-cols-4 gap-4 md:px-48">
            <div class="w-full max-w-sm rounded-lg">
              <div class="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconNumber10Small stroke={2} width={40} height={40} />
                </div>
                <h5 class="mb-1 text-xl font-medium">Experience</h5>
                <span class="text-sm text-gray-500">
                  10 tahun sudah kita menyediakan layanan ini.
                </span>
              </div>
            </div>
            <div class="w-full max-w-sm rounded-lg">
              <div class="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconUsers stroke={2} width={40} height={40} />
                </div>
                <h5 class="mb-1 text-xl font-medium">Customer</h5>
                <span class="text-sm text-gray-500">
                  Lebih dari 100+ pengguna yang terdaftar
                </span>
              </div>
            </div>
            <div class="w-full max-w-sm rounded-lg">
              <div class="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconBrandSpeedtest stroke={2} width={40} height={40} />
                </div>
                <h5 class="mb-1 text-xl font-medium">Unlimited</h5>
                <span class="text-sm text-gray-500">
                  Tidak ada batasan kuota.
                </span>
              </div>
            </div>
            <div class="w-full max-w-sm rounded-lg">
              <div class="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconRocket stroke={2} width={40} height={40} />
                </div>
                <h5 class="mb-1 text-xl font-medium">Bandwith</h5>
                <span class="text-sm text-gray-500">Up to 30mbps.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#02336A] bg-blend-multiply" id="pricing">
        <div className="mx-auto text-center py-12 md:py-24 px-4">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-[#02336A] md:text-4xl lg:text-5xl">
            Fitur Kami
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl lg:px-48">
            10 tahun efektif. sejak 2010, kami telah menerapkan pemasaran
            internet yang efektif yang menghasilkan penawaran kami.
          </p>
          <div class="grid grid-cols-2 place-content-center md:grid-cols-4 gap-4 md:px-48">
            <div class="w-full max-w-sm rounded-lg">
              <div class="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconNumber10Small stroke={2} width={40} height={40} />
                </div>
                <h5 class="mb-1 text-xl font-medium">Experience</h5>
                <span class="text-sm text-gray-500">
                  10 tahun sudah kita menyediakan layanan ini.
                </span>
              </div>
            </div>
            <div class="w-full max-w-sm rounded-lg">
              <div class="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconUsers stroke={2} width={40} height={40} />
                </div>
                <h5 class="mb-1 text-xl font-medium">Customer</h5>
                <span class="text-sm text-gray-500">
                  Lebih dari 100+ pengguna yang terdaftar
                </span>
              </div>
            </div>
            <div class="w-full max-w-sm rounded-lg">
              <div class="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconBrandSpeedtest stroke={2} width={40} height={40} />
                </div>
                <h5 class="mb-1 text-xl font-medium">Unlimited</h5>
                <span class="text-sm text-gray-500">
                  Tidak ada batasan kuota.
                </span>
              </div>
            </div>
            <div class="w-full max-w-sm rounded-lg">
              <div class="flex flex-col items-center pb-2 md:pb-10 space-y-6">
                <div className="max-w-full max-h-screen border border-gray-300 mb-3 rounded-full shadow-xl p-4 ">
                  <IconRocket stroke={2} width={40} height={40} />
                </div>
                <h5 class="mb-1 text-xl font-medium">Bandwith</h5>
                <span class="text-sm text-gray-500">Up to 30mbps.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
