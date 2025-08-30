export interface TimeSlot {
    id: string;
    label: string;
    date: Date;
    isAvailable: boolean;
    cutoffPassed?: boolean;
  }
  
  export const generateTimeSlots = (): TimeSlot[] => {
    const now = new Date();
    const currentHour = now.getHours();
    const slots: TimeSlot[] = [];
  
    // Today's slots
    const today = new Date();
    
    // "Now" - only available if before 6 PM
    if (currentHour < 18) {
      slots.push({
        id: 'now',
        label: 'Now',
        date: today,
        isAvailable: true
      });
    }
  
    // "Tonight" - only available if before 8 PM
    if (currentHour < 20) {
      const tonight = new Date(today);
      tonight.setHours(18, 0, 0, 0);
      slots.push({
        id: 'tonight',
        label: 'Tonight',
        date: tonight,
        isAvailable: true,
        cutoffPassed: currentHour >= 12 // Show countdown if after noon
      });
    }
  
    // Tomorrow
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0);
    slots.push({
      id: 'tomorrow',
      label: 'Tomorrow',
      date: tomorrow,
      isAvailable: true
    });
  
    // Day after tomorrow
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);
    dayAfter.setHours(9, 0, 0, 0);
    slots.push({
      id: 'day-after',
      label: getFormattedDay(dayAfter),
      date: dayAfter,
      isAvailable: true
    });
  
    // This Weekend (Saturday)
    const saturday = getNextSaturday();
    if (saturday.getDate() !== today.getDate()) {
      saturday.setHours(10, 0, 0, 0);
      slots.push({
        id: 'weekend',
        label: 'This Weekend',
        date: saturday,
        isAvailable: true
      });
    }
  
    return slots;
  };
  
  const getFormattedDay = (date: Date): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };
  
  const getNextSaturday = (): Date => {
    const today = new Date();
    const daysUntilSaturday = (6 - today.getDay()) % 7;
    const saturday = new Date(today);
    saturday.setDate(today.getDate() + (daysUntilSaturday === 0 ? 7 : daysUntilSaturday));
    return saturday;
  };
  
  export const formatPickupDisplay = (timeSlot: TimeSlot): string => {
    const date = timeSlot.date;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    if (timeSlot.id === 'now') {
      return `Now, ${monthNames[date.getMonth()]}. ${date.getDate()}`;
    }
    
    return `${timeSlot.label}, ${monthNames[date.getMonth()]}. ${date.getDate()}`;
  };
  
  export const calculateTimeLeft = (timeSlot: TimeSlot): string => {
    if (!timeSlot.cutoffPassed) return '';
    
    const now = new Date();
    const cutoff = new Date(timeSlot.date);
    cutoff.setHours(20, 0, 0, 0); // 8 PM cutoff for tonight pickup
    
    const diffMs = cutoff.getTime() - now.getTime();
    if (diffMs <= 0) return '00:00:00';
    
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };