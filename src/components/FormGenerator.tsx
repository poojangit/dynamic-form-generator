import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormGeneratorProps {
  schema: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema.fields.map((field: any) => (
        <div key={field.id} className="flex flex-col">
          <label htmlFor={field.id} className="font-medium">{field.label}</label>
          {field.type === 'text' || field.type === 'email' || field.type === 'textarea' ? (
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.id, { required: field.required })}
              className="border p-2"
            />
          ) : null}
          {errors[field.id] && <p className="text-red-500">{field.label} is required</p>}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default FormGenerator;
