import { useEffect, useState } from "react";

/**
 * This function accepts a date in ISO 8601 format
 * and return the date in readable format
 * @param {string} date
 * @returns {string}
 */

const useFormattedDate = (date) => {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(
    () => setFormattedDate(new Date(date).toLocaleDateString("en-US")),
    []
  );

  return formattedDate;
};

export default useFormattedDate;
