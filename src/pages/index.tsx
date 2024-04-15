import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <main>
        <div className="ml-0 flex items-center justify-left h-screen">
          <div className="flex justify-left place-items-center w-full">
            <div className="w-full max-w-[300px]">
              <svg
                viewBox="0 0 533 876"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="c-intro__introImage"
              >
                <path
                  fillRule="evenodd"
                  id="lines"
                  clipRule="evenodd"
                  d="M-94 361.374V239.558L200.093 435.249V557.065L-94 361.374ZM-94 404.599L200.093 600.29V873L-94 661.984V404.599ZM-81.1774 204.585L40.8445 116.957L200.093 223.054V392.024L-81.1774 204.585ZM72.2806 94.5583L200.093 3V179.829L72.2806 94.5583ZM531 480.832L237.734 676.13V436.428L531 241.13V480.832ZM531 524.057V661.984L237.734 872.214V718.962L531 524.057ZM519.005 205.371L237.32 392.81V223.84L396.983 117.743L519.005 205.371ZM237.32 3.39295L365.547 95.3442L237.32 180.615V3.39295Z"
                  stroke="#5333B5"
                  strokeWidth="5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
            <div className="ml-4">
              <div className="row">
                <div className="text-4xl ">
                  <div className="flex row">
                    <span>
                      <div className="text-primary mr-2 font-bold">
                        Software Development Services.
                      </div>
                    </span>
                  </div>
                </div>
                <div className="text-xl ">
                  More than 20 years of experience building high quality
                  software for fin-tech and retail industries.
                </div>
              </div>
              <div className="row mt-4">
                <div className="text-xl text-primary underline font-bold">
                  Our services
                </div>
                <div className="text-xl font-semibold">
                  Business Analysis, Software Development, DevOps and IT Audit
                </div>
              </div>
              <div className="row mt-4">
                <div className="text-xl text-primary underline font-bold">
                  Contact Us
                </div>
                <div className="text-xl font-semibold">
                  <a href="mailto:contact@mindly.ee">
                    Email: contact@mindly.dev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <script
        src="//code.tidio.co/hcyxoxvjdiquuqu7t6vsrg6pydi9cqtr.js"
        async
      ></script>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata();

  return (
    <>
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
    </>
  );
};
