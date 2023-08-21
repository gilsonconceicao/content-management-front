import { Box } from '@mui/material'
import { IApiTypeError } from 'Contexts/ApiErrorContext'
import React from 'react'

type ErrorProps = {
    error: IApiTypeError
}

export const Error = ({ error }: ErrorProps) => {
    const messageError = error?.response?.data?.error; 
    debugger
    return (
        <Box className='bg-red-500 p-2 rounded text-white'>
            {messageError ?? error?.message}
        </Box>
    )
}
