import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import React from "react";

function index() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              LogistaNet
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://facebook.com/logista-net"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <IconBrandFacebook stroke={1} />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://instagram.com/logista-net"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <IconBrandInstagram stroke={1} />
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default index;
