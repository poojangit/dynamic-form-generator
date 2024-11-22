import React from 'react';

interface FormPreviewProps {
  jsonSchema: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ jsonSchema }) => {
  return (
    <div>
      <h2>Form Preview</h2>
      <pre>{jsonSchema}</pre>
    </div>
  );
};

export default FormPreview;
