import { TextField, TextFieldProps } from '@mui/material';
import { Controller } from "react-hook-form";
import { useFormContext } from 'Contexts/FormContext';
import React, { FC } from 'react'

type TextFormFieldProps = {
  label: string;
  name: string;
  typeInput?: React.HTMLInputTypeAttribute | undefined
  fullWidth?: boolean;
} & TextFieldProps;

export const TextFormField: FC<TextFormFieldProps> = (props) => {
  const { label, name, typeInput, required, fullWidth, } = props;
  const { errors, control } = useFormContext();
  const hasError = Object.keys(errors).length > 0;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => {
        return (
          <>
            <TextField
              className={`p-3 border-2 border-neutral-400 rounded ${fullWidth ? 'w-[100%]' : 'w-auto'}`}
              label={label}
              onChange={onChange}
              value={value}
              variant='outlined'
              error={hasError}
              type={typeInput}
              required={required}
            />
            {hasError && <p className='text-red-500 text-xs' style={{marginTop: 3 }}>{errors[name]?.message as string}</p>}
          </>
        )
      }}
    />
  )
}