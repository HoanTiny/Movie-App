/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';

import { Control } from 'react-hook-form';

interface FormFieldProps {
  control: Control<any>;
  label: string;
  name: string;
  Component: React.ComponentType<any>;
}

function FormField({ control, label, name, Component }: FormFieldProps) {
  return (
    <div>
      <p className="font-bold my-2">{label}</p>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              control={control}
            />
          );
        }}
      />
    </div>
  );
}

export default FormField;
