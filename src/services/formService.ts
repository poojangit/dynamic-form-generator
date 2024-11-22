import { FormSchema, FormField } from "../types/schema";

/**
 * Generates default values for the form fields based on the schema.
 * @param schema - The schema defining the form fields.
 * @returns An object with default values for each form field.
 */
export function generateDefaultValues(schema: FormSchema): Record<string, any> {
  const defaultValues: Record<string, any> = {};

  schema.fields.forEach((field: FormField) => {
    if (field.type === "checkbox") {
      defaultValues[field.id] = false; // Default for checkboxes
    } else if (field.type === "radio" || field.type === "select") {
      defaultValues[field.id] = field.options?.[0]?.value || ""; // Default to the first option if available
    } else {
      defaultValues[field.id] = ""; // Default for text, email, etc.
    }
  });

  return defaultValues;
}

/**
 * Validates a form schema to ensure all fields have the necessary properties.
 * @param schema - The schema to validate.
 * @returns True if the schema is valid, otherwise false.
 */
export function validateSchema(schema: FormSchema): boolean {
  if (!schema.fields || !Array.isArray(schema.fields)) {
    console.error("Invalid schema: 'fields' must be an array.");
    return false;
  }

  return schema.fields.every((field) => {
    if (!field.id || !field.type || !field.label) {
      console.error(`Field is missing required properties: ${JSON.stringify(field)}`);
      return false;
    }

    if (
      (field.type === "select" || field.type === "radio") &&
      (!field.options || !Array.isArray(field.options))
    ) {
      console.error(`Field of type '${field.type}' requires 'options': ${JSON.stringify(field)}`);
      return false;
    }

    return true;
  });
}

/**
 * Updates a specific field in the form schema.
 * @param schema - The original form schema.
 * @param fieldId - The ID of the field to update.
 * @param updates - The updates to apply to the field.
 * @returns A new form schema with the updated field.
 */
export function updateField(
  schema: FormSchema,
  fieldId: string,
  updates: Partial<FormField>
): FormSchema {
  const updatedFields = schema.fields.map((field) =>
    field.id === fieldId ? { ...field, ...updates } : field
  );

  return { ...schema, fields: updatedFields };
}

export {}; // Ensure this file is treated as a module
