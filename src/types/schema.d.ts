// src/types/schema.d.ts

export interface FormField {
  id: string;
  type: "text" | "email" | "textarea" | "select" | "radio" | "checkbox";
  label: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // Define the options type here
  validation?: {
    pattern: string;
    message: string;
  };
}

export interface FormSchema {
  formTitle: string; // Title of the form
  formDescription: string; // Description of the form
  fields: FormField[]; // Array of form fields
}
