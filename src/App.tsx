import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';
import './styles/index.css';

const App = () => {
  const [jsonSchema, setJsonSchema] = useState('{}');

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 border-r">
        <JSONEditor jsonSchema={jsonSchema} setJsonSchema={setJsonSchema} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <FormPreview jsonSchema={jsonSchema} />
      </div>
      {/* <h1>Hello</h1> */}
    </div>
    
  );
};

export default App;
