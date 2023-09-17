import { TextField } from '@mui/material';
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

type TextFormFieldProps = {
  label: string;
  name: string;
  required?: boolean;
  typeInput?: React.HTMLInputTypeAttribute | undefined
  register: UseFormRegister<any>;
  fullWidth?: boolean;
  error?: any;
};

export const TextFormField: FC<TextFormFieldProps> = (props) => {
  const { label, error, register, name, fullWidth, required, typeInput } = props;
  const hasError= Object.keys(error).length > 0; 

  return (
    <div>
      <TextField
        className={`p-3 border-2 border-neutral-400 rounded ${fullWidth ? 'w-[100%]' : 'w-auto'}`}
        label={label}
        variant='outlined'
        error={hasError}
        type={typeInput}
        required={required}
        {...register(name)}
      />
      {hasError && <p className='text-red-500'>{error[name]?.message}</p>}
    </div>
  )
}