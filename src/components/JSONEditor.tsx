import React from 'react';

interface JSONEditorProps {
  jsonSchema: string;
  setJsonSchema: React.Dispatch<React.SetStateAction<string>>;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ jsonSchema, setJsonSchema }) => {
  return (
    <div>
      <textarea 
        value={jsonSchema} 
        onChange={(e) => setJsonSchema(e.target.value)} 
        className="w-full h-96 p-2 border" 
      />
    </div>
  );
};

export default JSONEditor;
