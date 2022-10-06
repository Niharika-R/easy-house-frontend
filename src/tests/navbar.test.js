import { Experimental_CssVarsProvider } from '@mui/material'
import { getByText, render,screen } from '@testing-library/react'
import React from 'react'
import App from '../App'

test('testing navbar is present in the app',()=>{
    render(<App/>)
    const textElement = screen.getByText('Easy Homes')
    expect(textElement).toBeInTheDocument()
})