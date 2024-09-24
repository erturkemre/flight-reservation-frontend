import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { bookFlightToDb } from "../store/actions/bookflightAction";


const formatDate = (dateString) => {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleString(undefined, options);
};

const FlightInfoCard = ({
  flight,
  departureAirport,
  departureTime,
  arrivalAirport,
  arrivalTime,
  flightDuration,
  price,
}) => {
const dispatch = useDispatch();

const handleFligth = () => {
    dispatch(bookFlightToDb(flight,'1'));
}

  return (
    <div className="flex flex-col relative m-4 p-5 border-b border-gray-200 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-lg font-semibold mb-2">
        {departureAirport} to {arrivalAirport.city}
      </div>

      <div className="text-m font-semibold mb-4">
        <div className="flex flex-col gap-5 items-start sm:flex-row sm:justify-between sm:items-center space-x-4">
          {/* Kalkış Bilgileri */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <PlaneTakeoff />
              <span className="font-medium text-gray-700">Departure</span>
            </div>
            <span className="text-gray-900">{formatDate(departureTime)}</span>
            <span className="text-gray-900">Airport: ({departureAirport})</span>
          </div>
          <hr className="w-1/12 my-auto border-gray-400" />
          {/* Uçuş Süresi */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faPlane} size="m" />{" "}
            <span className="text-gray-900">{flightDuration} minute</span>
          </div>

          <hr className=" w-1/12 my-auto  border-gray-400" />

          {/* Varış Bilgileri */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <PlaneLanding />
              <span className="font-medium text-gray-700">Arrival</span>
            </div>

            <span className="text-gray-900">{formatDate(arrivalTime)}</span>
            <span className="text-gray-900">Airport: ({arrivalAirport.iata})</span>
          </div>
        </div>
      </div>

      {/* Fiyat Bilgisi */}
      <div className="flex flex-row border-gray-200 justify-between items-center">
        <span className="text-lg font-bold text-[#6a1b9a]">{price}</span>
        <button onClick={handleFligth} className="bg-[#6a1b9a] text-white px-4 py-2 rounded-lg">
          Book Flight
        </button>
      </div>
    </div>
  );
};

export default FlightInfoCard;
