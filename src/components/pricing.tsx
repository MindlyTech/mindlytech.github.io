import * as React from "react";

export const Pricing: React.FC = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 ">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Our Pricing Plans
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Select the perfect plan that fits your business needs. From
              startups to established enterprises, our tailored pricing options
              are designed to empower your journey with our development
              services.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
            <div className="flex flex-col max-w-lg p-6 mx-auto text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold text-center">
                Fixed Price Model
              </h3>
              <p className="font-light text-justify text-gray-500 sm:text-lg dark:text-gray-400">
                Ideal for projects with well-defined requirements and scopes,
                our Fixed Price Model offers a straightforward approach with a
                clear budget and timeline. This model ensures predictability and
                minimal risk, as you pay a predetermined price for a specific
                set of deliverables. Perfect for businesses looking for
                stability and no surprises in development costs.
              </p>
            </div>
            <div className="flex flex-col max-w-lg p-6 mx-auto text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold text-center">
                Time and Materials
              </h3>
              <p className="font-light text-justify text-gray-500 sm:text-lg dark:text-gray-400">
                Suited for projects where scope and requirements are expected to
                evolve, the Time and Materials model offers the flexibility to
                adjust specifications, shift directions, and change features as
                needed. Costs are calculated based on the actual time spent by
                our team and the materials used. This model is ideal for
                projects requiring iterative development, providing transparency
                and allowing for agile adjustments throughout the project
                lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
