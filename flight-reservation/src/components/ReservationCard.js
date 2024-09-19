import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import React from "react";

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

const ReservationCard = ({
  departureAirport,
  departureTime,
  arrivalAirport,
  arrivalTime,
  flightDuration,
  price,
}) => {
  return (
    <div className="flex flex-col relative p-5 border border-gray-200 bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-full ">
      {/* Başlık */}
      <div className="flex flex-row text-2xl font-bold mb-4 items-center sm:gap-20">
      
          <div className="flex items-center">
            <PlaneTakeoff className="text-green-600" />
            <span className="ml-2">{formatDate(departureTime)}</span>
          </div>
         
          <div className="flex items-center">
            <PlaneLanding className="text-red-600" />
            <span className="ml-2">{formatDate(arrivalTime)}</span>
          </div>
      </div>

      {/* Bilgiler */}
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between items-center">
        {/* Sol Taraf: Uçak İsmi */}
        <div className="flex flex-col w-full sm:w-1/3">
          <div className="text-lg font-medium mb-2">Aircraft</div>
          
        </div>

        {/* Ortada: Uçuş Süresi */}
        <div className="flex flex-col items-center w-full sm:w-1/3">
          <FontAwesomeIcon icon={faPlane} size="3x" className="text-gray-600" />
          <span className="text-xl font-semibold mt-2">{flightDuration}</span>
        </div>

        {/* Sağ Taraf: Kalkış ve Varış Zamanı */}
        <div className="flex flex-col w-fit sm:w-1/3 text-lg font-semibold">
            <div>{departureAirport} to {arrivalAirport}</div>
            <div>Plane kod</div>
        </div>
      </div>

      {/* Fiyat Bilgisi */}
      <div className="flex flex-col items-start mt-6">
        <span className="text-2xl font-bold text-[#6a1b9a]">Price: {price} USD</span>
      </div>
    </div>
  );
};

export default ReservationCard;
