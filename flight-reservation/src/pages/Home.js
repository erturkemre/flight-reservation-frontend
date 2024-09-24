import React, { useEffect} from "react";
import BookYourFlight from "../components/BookYourFlight";
import FlipCard from "../components/FlipCard";
import { CarFrontIcon, Hotel, Umbrella } from "lucide-react";
import carImage from "../assets/rent-car.jpg";
import hotelImage from "../assets/hotels.jpg";
import tourImage from "../assets/travel-concepts.jpg";
import FlightInfoCard from "../components/FlightInfoCard";
import FilterFlight from "../components/FilterFlight";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../store/actions/flightAction";
import { fetchAirlines } from "../store/actions/airlineAction";
import { fetchAircraft } from "../store/actions/aircraftTypeAction";
import { fetchDestinations } from "../store/actions/destinationAction";
import { useLocation } from "react-router-dom";
import { getFlightReservations } from "../store/actions/bookflightAction";




const calculateFlightDuration = (departureTime, arrivalTime) => {
  const departure = new Date(departureTime);
  const arrival = new Date(arrivalTime);
  const duration = arrival - departure; 
  return Math.floor(duration / (1000 * 60));
};

const Home = () => {
  const location = useLocation();
  const flights = useSelector(state => state.flightReducer.flights);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const from = params.get('from');
    const route = params.get('route');
    const scheduleDate = params.get('scheduleDate');
    const returnDate = params.get('returnDate');
    const fromScheduleDate = params.get('fromScheduleDate'); 
    const toScheduleDate = params.get('toScheduleDate'); 

    dispatch(fetchFlights(from, route, scheduleDate, returnDate, fromScheduleDate, toScheduleDate)); 
    dispatch(fetchAirlines());
    dispatch(fetchAircraft());
    dispatch(fetchDestinations());
    dispatch(getFlightReservations());
  }, [dispatch, location.search]);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col sm:w-3/4">
        <BookYourFlight />
        <div className="flex flex-row ">
          <div className="w-3/4">
            {flights.map((flight, index) => (
              <FlightInfoCard
              key={index}
              flight={flight}
              departureAirport={flight.departureAirport}
              departureTime={flight.scheduleDateTime}
              arrivalAirport={flight.destinationName}
              arrivalTime={flight.estimatedLandingTime}
              flightDuration={calculateFlightDuration(
                flight.scheduleDateTime,
                flight.estimatedLandingTime
              )}
              price={800}
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
