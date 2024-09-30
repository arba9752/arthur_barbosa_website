import React, { useEffect, useState } from 'react';

// Define the start date (April 24th, 2003)
const startDate = new Date('2003-04-24T00:00:00Z');

// Function to calculate the years since the start date
const calculateYearsSince = (startDate: Date): number => {
  const now = new Date();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Accounts for leap years
  const elapsedMilliseconds = now.getTime() - startDate.getTime();
  const elapsedYears = elapsedMilliseconds / millisecondsInYear;
  return elapsedYears;
};

// YearsActiveCounter Component
const YearsActiveCounter: React.FC = () => {
  const [yearsActive, setYearsActive] = useState<number>(0);
  const [hydrated, setHydrated] = useState<boolean>(false);

  // Ensure the component is only updated on the client
  useEffect(() => {
    setHydrated(true);
    const interval = setInterval(() => {
      setYearsActive(calculateYearsSince(startDate));
    }, 10); // Update every 10ms for fast updates

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (!hydrated) {
    // Return a static value during server-side rendering to prevent mismatch
    return <span id="yearsActive">0</span>;
  }

  return (
    <span
      id="yearsActive"
      className="fade-in years-counter"
      style={{
        display: 'inline-block',
        width: '10ch', // Slightly increase width to prevent overlap
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums', // Ensures digits are monospaced within variable fonts
        marginRight: '1.25rem', // Add margin to the right to create space
      }}
    >
      {yearsActive.toFixed(10)}
    </span>
  );
};

export default YearsActiveCounter;
