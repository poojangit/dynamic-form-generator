// src/components/FormField.tsx

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { FormField } from "../types/schema"; // Type-only import

interface FormFieldProps {
  field: FormField;
}

const FormField: React.FC<FormFieldProps> = ({ field }) => {
  const { id, label, type, options, required, validation } = field;
  const { control } = useFormContext(); // Use react-hook-form's context

  // If there's validation, we can include it in the Controller
  const validationRules = validation
    ? {
        pattern: {
          value: new RegExp(validation.pattern),
          message: validation.message,
        },
      }
    : {};

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>

      {type === "radio" && options ? (
        <div className="space-x-4">
          {options.map((option) => (
            <label key={option.value} className="inline-flex items-center space-x-2">
              <Controller
                name={id} // Pass only the name here
                control={control}
                rules={{ required, ...validationRules }} // Apply validation
                render={({ field }) => (
                  <input
                    {...field} // Spread field properties here
                    type="radio"
                    value={option.value} // Value is explicitly set
                    className="radio"
                  />
                )}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      ) : type === "select" && options ? (
        <Controller
          name={id}
          control={control}
          rules={{ required, ...validationRules }} // Apply validation
          render={({ field }) => (
            <select {...field} id={id} className="select">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
      ) : (
        <Controller
          name={id}
          control={control}
          rules={{ required, ...validationRules }} // Apply validation
          render={({ field }) => (
            <input
              {...field}
              type={type}
              id={id}
              required={required}
              className="input"
            />
          )}
        />
      )}
    </div>
  );
};

export default FormField; // Make sure it's default export here
