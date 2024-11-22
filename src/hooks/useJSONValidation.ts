import { useState } from "react";

/**
 * Custom hook for validating JSON input in real-time.
 */
export const useJSONValidation = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Validates a JSON string.
   * @param jsonString The JSON string to validate.
   * @returns The parsed JSON object if valid, or null if invalid.
   */
  const validateJSON = (jsonString: string): object | null => {
    try {
      const parsed = JSON.parse(jsonString);
      setIsValid(true);
      setErrorMessage(null);
      return parsed;
    } catch (error: any) {
      setIsValid(false);
      setErrorMessage(error.message);
      return null;
    }
  };

  return { isValid, errorMessage, validateJSON };
};

export default useJSONValidation;
