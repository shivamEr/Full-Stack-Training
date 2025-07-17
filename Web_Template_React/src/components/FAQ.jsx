import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const accordionData = [
  {
    title: "What is Flowbite?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to{" "}
          <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">
            get started
          </a>{" "}
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </>
    ),
  },
  {
    title: "Is there a Figma file available?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          Check out the{" "}
          <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
            Figma design system
          </a>{" "}
          based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </>
    ),
  },
  {
    title: "What are the differences between Flowbite and Tailwind UI?",
    content: (
      <>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul className="ps-5 list-disc text-gray-500 dark:text-gray-400">
          <li>
            <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
              Flowbite Pro
            </a>
          </li>
          <li>
            <a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">
              Tailwind UI
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto mt-10">
      {accordionData.map((item, index) => (
        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl mb-2 overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className={`flex items-center justify-between w-full p-5 font-medium hover:text-blue-300 gap-3 transition-all ${
              index === 0 ? "rounded-t-xl" : ""
            }`}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-body-${index}`}
          >
            <span className="flex items-center">
              <FaInfoCircle className="w-5 h-5 me-2 shrink-0" />
              {item.title}
            </span>
            <HiChevronDown
              className={`w-4 h-4 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div id={`accordion-body-${index}`} className="p-5 border-t border-gray-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


