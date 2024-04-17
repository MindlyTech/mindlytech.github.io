import { Modal } from "flowbite";
import * as React from "react";
import { useEffect } from "react";

export const Cookie: React.FC = () => {
  useEffect(() => {
    // get the modal
    const bannerEL = document.getElementById("banner");
    const banner = new Modal(bannerEL, {
      placement: 'bottom-left'
  });

  }, []);

  return (
    <>
      <div
        id="banner"
        tabIndex={-1}
        aria-hidden="false"
        className="fixed z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full md:h-auto">
          <div className="relative bg-white shadow dark:bg-gray-800">
            <div className="items-center justify-between p-5 lg:flex">
              <p className="mb-4 text-sm text-gray-500 dark:text-white lg:mb-0">
                We use our own cookies as well as third-party cookies on our
                websites to enhance your experience, analyze our traffic, and
                for security and marketing. Select "Accept All" to allow them to
                be used. Read our{" "}
                <a
                  href="#"
                  className="font-medium text-gray-900 hover:underline dark:text-white"
                >
                  Cookie Policy
                </a>
                .
              </p>
              <div className="items-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex lg:pl-10 shrink-0">
                <a
                  href="#"
                  className="text-sm text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Manage settings
                </a>
                <button
                  id="block-cookies"
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Block all cookies
                </button>
                <button
                  id="accept-cookies"
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Accept all
                </button>
                <button
                  id="close-modal"
                  type="button"
                  className="hidden md:flex text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
