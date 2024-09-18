import { Filter } from "lucide-react";
import React, { useState } from "react";

const FilterFlight = () => {
  const [selectedArrivalTime, setSelectedArrivalTime] = useState("");
  const [selectedStopCount, setSelectedStopCount] = useState("");

  const arrivalTimes = [
    "Morning (6AM - 12PM)",
    "Afternoon (12PM - 6PM)",
    "Evening (6PM - 12AM)",
    "Night (12AM - 6AM)",
  ];

  const handleSortChange = (value) => {
    console.log(value);
  }

  const stopCounts = ["Non-stop", "1 Stop", "2+ Stops"];

  return (
    <div className="  rounded-lg  m-4 pr-5 w-full max-w-md">

      {/* Dropdown ile havayolu filtresi */}
      <div className="mb-6">
        <label className="block mb-2 text-m font-medium text-gray-700">
          Sort by
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Select</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Varış Zamanı Filtreleme */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Arrival Time
        </label>
        {arrivalTimes.map((time) => (
          <div key={time} className="flex items-center mb-2">
            <input
              type="radio"
              name="arrivalTime"
              value={time}
              checked={selectedArrivalTime === time}
              onChange={() => setSelectedArrivalTime(time)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
            />
            <label className="ml-2 text-sm text-gray-700">{time}</label>
          </div>
        ))}
      </div>

      {/* Aktarma Sayısı (Stop) Filtreleme */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Number of Stops
        </label>
        {stopCounts.map((stop) => (
          <div key={stop} className="flex items-center mb-2">
            <input
              type="radio"
              name="stopCount"
              value={stop}
              checked={selectedStopCount === stop}
              onChange={() => setSelectedStopCount(stop)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
            />
            <label className="ml-2 text-sm text-gray-700">{stop}</label>
          </div>
        ))}
      </div>

      {/* Filtreleme İşlemini Uygulama */}
      <button className="bg-[#6a1b9a] text-white px-4 py-2 rounded-lg w-full">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterFlight;
