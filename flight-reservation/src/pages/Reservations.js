
import { useEffect } from "react";
import ReservationCard from "../components/ReservationCard"; 
import { useDispatch, useSelector } from "react-redux";
import { getFlightReservations } from "../store/actions/bookflightAction";


const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.bookflightReducer.bookedFlights); 

  useEffect(() => {
    dispatch(getFlightReservations()); 
  }, [dispatch]);

  console.log("Reservations from store: ", reservations); 

  return (
    <div className="bg-gray-300 p-4 min-h-screen">
      <h1 className="text-3xl font-bold px-5 mb-4">My Reservations</h1>
      <div className="flex flex-col flex-wrap gap-4 justify-start p-5">
        {reservations.map((reservation) => (
          <ReservationCard
            key={reservation._id}
            flight={reservation}
          />
        ))}
      </div>
    </div>
  );
};

export default Reservations;
