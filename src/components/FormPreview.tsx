import React from 'react';

interface FormPreviewProps {
  jsonSchema: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ jsonSchema }) => {
  console.log(jsonSchema);  // Log the JSON schema to check if it's passed correctly
  return (
    <div>
      <h2>Form Preview</h2>
      <pre>{jsonSchema}</pre>  {/* This should show the schema as a JSON string */}
    </div>
  );
};

export default FormPreview;
