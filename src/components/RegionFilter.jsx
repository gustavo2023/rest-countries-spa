import { useState } from "react";

function RegionFilter({ regions, selectedRegion, onSelectRegion }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (region) => {
    onSelectRegion(region);
    setIsOpen(false);
  };

  return (
    <div className="relative w-52">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 py-5 bg-white dark:bg-blue-900 rounded-(--rounded-card) shadow-input cursor-pointer text-black dark:text-white"
      >
        <span className="text-sm font-semibold">
          {selectedRegion || "Filter by Region"}
        </span>
        <svg
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 9 6"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.95 0L4.5 3.45L1.05 0L0 1.05L4.5 5.55L9 1.05L7.95 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white dark:bg-blue-900 rounded-md shadow-input py-2 text-gray-900 dark:text-white left-0 top-full">
          <li
            onClick={() => handleSelect("")}
            className="px-6 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold"
          >
            All Regions
          </li>
          {regions.map((region) => (
            <li
              key={region}
              onClick={() => handleSelect(region)}
              className="px-6 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-semibold"
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegionFilter;
