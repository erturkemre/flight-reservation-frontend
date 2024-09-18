import {  PlaneLanding, PlaneTakeoff } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const BookYourFlight = () => {
  const [flightType, setFlightType] = useState("round-trip");

  return (
    <div className="bg-white p-6 mx-4 rounded-lg shadow-lg mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-row gap-2 items-center ">
        <FontAwesomeIcon icon={faPlane} size="xl" />{" "}
          <h2 className="text-2xl font-bold">BOOK YOUR FLIGHT</h2>
        </div>
        <div className="flex bg-gray-300 border-gray-300 rounded-[1rem]">
          <button
            className={`mr-4 px-4 py-2 rounded-l-[1rem] ${
              flightType === "round-trip" ? "bg-[#6a1b9a] text-white" : ""
            }`}
            onClick={() => setFlightType("round-trip")}
          >
            Round trip
          </button>
          <button
            className={`px-4 py-2 rounded-r-[1rem] ${
              flightType === "one-way" ? "bg-[#6a1b9a] text-white" : ""
            }`}
            onClick={() => setFlightType("one-way")}
          >
            One way
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full gap-4 mt-4">
        {/* Kalkış ve Varış Alanları */}
        <div className="flex flex-col sm:flex-row flex-1 gap-2">
          <div className="flex flex-row flex-1 p-2 h-10 border border-gray-300 sm:rounded-l-[100px] items-center">
            <PlaneTakeoff size={20} color="#6a1b9a" />
            <input
              type="text"
              placeholder="From"
              className="ml-2 w-full outline-none"
            />
          </div>

          <div className="flex flex-row p-2 h-10 border border-gray-300 sm:rounded-r-[100px] items-center">
            <PlaneLanding size={20} color="#6a1b9a" />
            <input
              type="text"
              placeholder="To"
              className="ml-2 w-full outline-none"
            />
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row flex-1 gap-2">
          <div className="flex flex-1 p-2 h-10 border border-gray-300 sm:rounded-l-[100px] items-center">
            <input
              type="date"
              className="w-full outline-none"
              placeholder="Departure Date"
            />
          </div>

          {flightType === "round-trip" && (
            <div className="flex flex-1 p-2 h-10 border border-gray-300 sm:rounded-r-[100px] items-center">
              <input
                type="date"
                className="w-full outline-none"
                placeholder="Return Date"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="bg-[#6a1b9a] text-white px-6 py-2 rounded-md">
          Show flights
        </button>
      </div>
    </div>
  );
};

export default BookYourFlight;
