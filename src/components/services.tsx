import * as React from "react";

export const Services: React.FC = () => {
  const services = [
    {
      title: "AI Strategy Consulting",
      description:
        "Identify opportunities for AI integration to enhance operations, customer experience, and innovation. Includes AI readiness assessment, opportunity identification, and roadmap development.",
    },
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet specific business needs, including machine learning models, natural language processing applications, and predictive analytics.",
    },
    {
      title: "AI Integration Services",
      description:
        "Integrate AI technologies into existing systems and processes, including API integration, legacy system upgrades, and incorporation of AI functionalities into current business applications.",
    },
    {
      title: "AI-Powered Data Analytics",
      description:
        "Transform data into actionable insights with AI-powered analytics, including data processing, visualization, and predictive modeling.",
    },
    {
      title: "AI-Driven Automation Solutions",
      description:
        "Automate routine tasks and processes with AI-driven solutions, including robotic process automation (RPA) and intelligent process automation (IPA).",
    },
    {
      title: "Product Development & Prototyping",
      description:
        "Assist in designing, prototyping, testing, and launching products to ensure they are market-ready and aligned with user needs.",
    },
    {
      title: "Continuous Support & Maintenance",
      description:
        "Provide ongoing monitoring, updates, and optimization to maximize the performance and longevity of developed solutions.",
    },
    {
      title: "Training & Workshops",
      description:
        "Empower teams with knowledge and skills in AI technologies through training programs and workshops covering AI fundamentals and best practices.",
    },
  ];

  return (
    <>
      <section className="antialiased bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Services
            </h2>
          </div>

          <div className="p-4 mt-8 rounded-lg sm:p-12 lg:mt-16 bg-gray-50 dark:bg-gray-800">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
              {services.map((service) => (
                <Service
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Service: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full dark:bg-gray-700 lg:w-24 lg:h-24 shrink-0">
        <svg
          aria-hidden="true"
          className="w-10 h-10 lg:w-12 lg:h-12 text-primary-600 dark:text-primary-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
