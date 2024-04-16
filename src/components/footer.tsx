import * as React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2018-2024{" "}
            <a href="#" className="hover:underline">
              Mindly™
            </a>
            . All Rights Reserved. | Marati 5, 10151 Tallinn, Estonia
          </span>
        </div>
      </footer>
    </>
  );
};
