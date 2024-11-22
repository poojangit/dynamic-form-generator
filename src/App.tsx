import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';
import './styles/index.css';

const App = () => {
  // Replace the empty JSON schema with the provided sample schema
  const [jsonSchema, setJsonSchema] = useState(`
  {
    "formTitle": "Project Requirements Survey",
    "formDescription": "Please fill out this survey about your project needs",
    "fields": [
      {
        "id": "name",
        "type": "text",
        "label": "Full Name",
        "required": true,
        "placeholder": "Enter your full name"
      },
      {
        "id": "email",
        "type": "email",
        "label": "Email Address",
        "required": true,
        "placeholder": "you@example.com",
        "validation": {
          "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
          "message": "Please enter a valid email address"
        }
      }
    ]
  }
  `);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 border-r">
        <JSONEditor jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <FormPreview jsonSchema={jsonSchema} />
      </div>
    </div>
  );
};

export default App;
