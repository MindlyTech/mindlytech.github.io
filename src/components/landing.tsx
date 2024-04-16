import * as React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Landing: React.FC = () => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords,
  } = useSiteMetadata();

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Empowering Your Business with AI-Driven Solutions
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We enable businesses to harness the transformative potential of AI
              for enhanced efficiency, growth, and competitive advantage. Our
              experienced team guides you through every stage of your AI
              journey, from strategy to implementation, ensuring tailored
              solutions that deliver measurable results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Contact us
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <svg
              width="400px"
              height="400px"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568"
                stroke="#6d28d9"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};
