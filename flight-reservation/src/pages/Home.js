import React from "react";
import BookYourFlight from "../components/BookYourFlight";
import FlipCard from "../components/FlipCard";
import { CarFrontIcon, Hotel, Umbrella } from "lucide-react";
import carImage from "../assets/rent-car.jpg";
import hotelImage from "../assets/hotels.jpg";
import tourImage from "../assets/travel-concepts.jpg";
import FlightInfoCard from "../components/FlightInfoCard";
import FilterFlight from "../components/FilterFlight";
// dummyData.js
export const flightData =  [
    {
      "departureAirport": "IST",
      "departureTime": "2024-09-20T10:30:00.000Z",
      "arrivalAirport": "LHR",
      "arrivalTime": "2024-09-20T12:45:00.000Z",
      "price": "350.00 USD",
      "flightNumber": 101,
      "flightDirection": "D",
      "route": {
        "destinations": ["IST", "LHR"],
        "visa": false
      }
    },
    {
      "departureAirport": "JFK",
      "departureTime": "2024-09-21T14:00:00.000Z",
      "arrivalAirport": "CDG",
      "arrivalTime": "2024-09-21T19:45:00.000Z",
      "price": "450.00 USD",
      "flightNumber": 202,
      "flightDirection": "D",
      "route": {
        "destinations": ["JFK", "CDG"],
        "visa": false
      }
    },
    {
      "departureAirport": "SFO",
      "departureTime": "2024-09-22T06:00:00.000Z",
      "arrivalAirport": "NRT",
      "arrivalTime": "2024-09-23T08:30:00.000Z",
      "price": "1200.00 USD",
      "flightNumber": 303,
      "flightDirection": "D",
      "route": {
        "destinations": ["SFO", "NRT"],
        "visa": true
      }
    },
    {
      "departureAirport": "DXB",
      "departureTime": "2024-09-25T23:00:00.000Z",
      "arrivalAirport": "SYD",
      "arrivalTime": "2024-09-26T07:00:00.000Z",
      "price": "800.00 USD",
      "flightNumber": 404,
      "flightDirection": "D",
      "route": {
        "destinations": ["DXB", "SYD"],
        "visa": true
      }
    }
  ]

const calculateFlightDuration = (departureTime, arrivalTime) => {
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const duration = (arrival - departure) / (1000 * 60); // dakika cinsinden süre
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  };

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col sm:w-3/4">
        <BookYourFlight />
        <div className="flex flex-row ">
          <div className="w-3/4">
            {flightData.map((flight, index) => (
              <FlightInfoCard
              key={index}
              departureAirport={flight.departureAirport}
              departureTime={flight.departureTime}
              arrivalAirport={flight.arrivalAirport}
              arrivalTime={flight.arrivalTime}
              flightDuration={calculateFlightDuration(
                flight.departureTime,
                flight.arrivalTime
              )}
              price={flight.price}
              />
            ))}
          </div>
          <div className="w-1/4"> <FilterFlight/></div>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col items-center w-1/4 ">
        <FlipCard
          icon={<CarFrontIcon />}
          title="Car Rentals"
          link="/rentals"
          imageUrl={carImage}
        />
        <FlipCard
          icon={<Hotel />}
          title="Hotel Bookings"
          link="/hotels"
          imageUrl={hotelImage}
        />
        <FlipCard
          icon={<Umbrella />}
          title="Tour Packages"
          link="/tours"
          imageUrl={tourImage}
        />
      </div>
    </div>
  );
};

export default Home;
