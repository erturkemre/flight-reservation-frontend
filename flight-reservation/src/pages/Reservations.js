import React, { useState } from "react";
import ReservationCard from "../components/ReservationCard"; 

// Dummy data for reservations
const dummyReservations = [
  {
    _id: "1",
    flightId: "HV5360",
    departureAirport: "JFK",
    departureTime: "2024-09-19T11:51:55.950Z",
    arrivalAirport: "LAX",
    arrivalTime: "2024-09-19T14:51:55.950Z",
    flightDuration: "5h 0m",
    price: "800",
    createdAt: "2024-09-15T10:00:00.000Z",
  },
  {
    _id: "2",
    flightId: "LH1234",
    departureAirport: "ORD",
    departureTime: "2024-09-20T08:30:00.000Z",
    arrivalAirport: "MIA",
    arrivalTime: "2024-09-20T12:30:00.000Z",
    flightDuration: "4h 0m",
    price: "650 ",
    createdAt: "2024-09-16T11:00:00.000Z",
  },
  // Add more dummy data as needed
];

const Reservations = () => {
  const [reservations, setReservations] = useState(dummyReservations);

  return (
    <div className="bg-gray-300 p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">My Reservations</h1>
      <div className="flex flex-col flex-wrap gap-4 justify-start p-5">
        {reservations.map((reservation) => (
          <ReservationCard
            key={reservation._id}
            departureAirport={reservation.departureAirport}
            departureTime={reservation.departureTime}
            arrivalAirport={reservation.arrivalAirport}
            arrivalTime={reservation.arrivalTime}
            flightDuration={reservation.flightDuration}
            price={reservation.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Reservations;
