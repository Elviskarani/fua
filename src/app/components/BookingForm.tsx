import React, { useState } from 'react';
import InitialBookingForm from './InitialBookingForm';
import UserDetailsForm from './UserDetailsForm';
import ServiceSelection from './ServiceSelection';
import Confirmation from './Confirmation';
import { TimeSlot } from '../utils/dateUtils';

export interface BookingData {
  timeSlot: TimeSlot | null;
  location: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  selectedServices: string[];
  rushServices: string[];
}

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    timeSlot: null,
    location: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    selectedServices: [],
    rushServices: []
  });

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...updates }));
  };

  const resetBooking = () => {
    setCurrentStep(0);
    setBookingData({
      timeSlot: null,
      location: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      selectedServices: [],
      rushServices: []
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