import * as React from "react";
import { useAirtable } from "../hooks/use-airtable";
import { Alert } from "flowbite-react";

export const Contact: React.FC = () => {
  const airtable = useAirtable();

  function sendToAirtable(): void {
    // validate form
    // if not valid, show error
    // if valid, send to airtable

    // send to airtable
    const fullName = document.getElementById("fullName") as HTMLInputElement;
    const company = document.getElementById("company") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const phoneNumber = document.getElementById(
      "phoneNumber"
    ) as HTMLInputElement;
    const message = document.getElementById("message") as HTMLInputElement;

    airtable("Messages").create(
      [
        {
          fields: {
            FullName: fullName.value,
            Company: company.value,
            Email: email.value,
            PhoneNumber: phoneNumber.value,
            Message: message.value,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        if (records == null) {
          return;
        }
        records.forEach(function (record) {
          console.log("Created record: " + record.getId());
          // show success alert
          const successAlert = document.getElementById("successAlert");
          if (successAlert !== null && successAlert !== undefined) {
            successAlert.classList.remove("hidden");
            // scroll to alert
            successAlert.scrollIntoView({ behavior: "instant" });
          }
        });
      }
    );
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <a id="contact" href="#contact" className="sr-only" />

        <div className="max-w-screen-md px-4 py-8 mx-auto rounded lg:py-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
            We’ll contact you within a couple of hours to schedule a meeting to
            discuss your goals.
          </p>

          <Alert
            color="success"
            id="successAlert"
            className="hidden mt-4 mb-4"
            onDismiss={() => {
              const successAlert = document.getElementById("successAlert");
              if (successAlert !== null && successAlert !== undefined) {
                successAlert.classList.add("hidden");
              }
            }}
          >
            <span className="font-medium">Thank You!</span> We will contact you
            shortly.
          </Alert>

          <form
            action="#"
            className="grid max-w-screen-md grid-cols-1 gap-8 mx-auto sm:grid-cols-2"
            onSubmit={() => sendToAirtable()}
          >
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your full name
              </label>
              <input
                type="text"
                id="fullName"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="FinTech Inc."
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="+12 345 6789"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                About a project...
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
              <p className="mt-4 text-sm text-gray-500">
                By submitting this form you agree to our{" "}
                <a
                  href="/privacy"
                  className="text-primary-600 hover:underline dark:text-primary-500"
                >
                  privacy policy
                </a>{" "}
                which explains how we may collect, use and disclose your
                personal information including to third parties.
              </p>
            </div>
            <button
              type="submit"
              className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
