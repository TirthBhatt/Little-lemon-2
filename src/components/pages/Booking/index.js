import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchAPI, submitAPI } from '../../../utils/fakeAPI';
import pages from '../../../utils/Pages';
import BookingForm from '../Booking/Booking';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    availableTimes, 
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/cmf');
  }; 

  return (
    <div className="bookings">
      <h2>Table reservation</h2>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
  );
};

export default Bookings;