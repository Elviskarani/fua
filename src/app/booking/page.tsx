'use client';

import React, { useState, useEffect } from 'react';
import UserDetailsForm from '../components/UserDetailsForm';
import ServiceSelection from '../components/ServiceSelection';
import Confirmation from '../components/Confirmation';
import { TimeSlot } from '../utils/dateUtils';

export interface BookingData {
  timeSlot: TimeSlot | null;
  location: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  selectedServices: string[];
}

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    timeSlot: null,
    location: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    selectedServices: []
  });

  useEffect(() => {
    const savedBookingData = localStorage.getItem('bookingData');
    if (savedBookingData) {
      const initialData = JSON.parse(savedBookingData);
      setBookingData(prev => ({
        ...prev,
        timeSlot: {
          ...initialData.timeSlot,
          date: new Date(initialData.timeSlot.date) // Parse date back from JSON
        },
        location: initialData.location
      }));
      localStorage.removeItem('bookingData');
    }
  }, []);

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...updates }));
  };

  const resetBooking = () => {
    setCurrentStep(1);
    setBookingData({
      timeSlot: null,
      location: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      selectedServices: []
    });
    window.location.href = '/';
  };

  const stepProps = {
    bookingData,
    updateBookingData,
    setCurrentStep,
    resetBooking
  };

  const steps = [
    <UserDetailsForm {...stepProps} />,
    <ServiceSelection {...stepProps} />,
    <Confirmation {...stepProps} />
  ];

  return (
    <div className="min-h-screen">
      {steps[currentStep - 1]}
    </div>
  );
};

export default BookingPage;