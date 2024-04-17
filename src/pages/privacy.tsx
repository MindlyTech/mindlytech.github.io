import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const PrivacyPage: React.FC<PageProps> = () => {
  const policies = [
    {
      title: "Information Collection",
      description:
        "We collect information that you provide directly to us, such as when you create an account, request services, or communicate with us. This may include personal information like your name, email address, phone number, and payment information.",
    },
    {
      title: "Information Use",
      description:
        "The information we collect is used to provide, maintain, and improve our services, to process transactions, to communicate with you about our services, and to comply with legal obligations.",
    },
    {
      title: "Information Sharing",
      description:
        "We do not sell, trade, or otherwise transfer your personal information to outside parties except for trusted third parties who assist us in operating our website, conducting our business, or serving you, so long as those parties agree to keep this information confidential.",
    },
    {
      title: "Data Security",
      description:
        "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.",
    },
    {
      title: "Cookies and Tracking Technologies",
      description:
        "We may use cookies, beacons, and similar technologies to improve your experience on our website, to analyze trends, administer the website, track users' movements around the website, and to gather demographic information about our user base as a whole.",
    },
    {
      title: "Your Rights",
      description:
        "You have the right to access, correct, or delete your personal information held by us. You also have the right to opt-out of certain uses and disclosures of your personal information.",
    },
    {
      title: "Third-Party Links",
      description:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of such websites.",
    },
    {
      title: "Changes to This Privacy Policy",
      description:
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
    },
  ];

  return (
    <>
      <main>
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Privacy policy
            </h2>

            <div key="intro" className="mb-5">
              <p className="text-gray-500 dark:text-gray-400">
                This Privacy Policy outlines how we collect, use, protect, and
                disclose information and data when you use our website and
                services. We are committed to ensuring the privacy and security
                of your information.
              </p>
            </div>

            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-1">
              <div>
                {policies.map((policy) => (
                  <div key={policy.title} className="mb-10">
                    <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-2 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {policy.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {policy.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        src="//code.tidio.co/hcyxoxvjdiquuqu7t6vsrg6pydi9cqtr.js"
        async
      ></script>
    </>
  );
};

export default PrivacyPage;

export const Head: HeadFC = () => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    keywords,
  } = useSiteMetadata();

  return (
    <>
      <title>Mindly: {defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={keywords} />
    </>
  );
};
