import { TextField, TextFieldProps } from '@mui/material';
import React from 'react'

type TextFormFieldProps = {
  label: string;
  name: string;
} & TextFieldProps

export const TextFormField = (props: TextFormFieldProps) => {
  const { label, name, ...rest } = props
  return (
    <TextField
      name={name}
      label={label}
      {...rest}
    />
  )
}
