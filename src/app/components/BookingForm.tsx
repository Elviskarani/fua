import React, { useState } from 'react';
import InitialBookingForm from './InitialBookingForm';
import UserDetailsForm from './UserDetailsForm';
import ServiceSelection from './ServiceSelection';
import Confirmation from './Confirmation';

export interface BookingData {
  pickupTime: string;
  location: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  selectedServices: string[];
}

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    pickupTime: 'Tonight',
    location: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    selectedServices: []
  });

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...updates }));
  };

  const resetBooking = () => {
    setCurrentStep(0);
    setBookingData({
      pickupTime: 'Tonight',
      location: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      selectedServices: []
    });
  };

  const stepProps = {
    bookingData,
    updateBookingData,
    setCurrentStep,
    resetBooking
  };

  const steps = [
    <InitialBookingForm {...stepProps} />,
    <UserDetailsForm {...stepProps} />,
    <ServiceSelection {...stepProps} />,
    <Confirmation {...stepProps} />
  ];

  return steps[currentStep];
};

export default BookingForm;