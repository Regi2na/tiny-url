/*
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import TinyUrl from './TinyUrl'; 

test('submits form with incorrect original URL', () => {
    const handleSubmit = jest.fn(); // Mock submit function
    const { getByPlaceholderText, getByText } = render(<TinyUrl onSubmit={handleSubmit} />);  
    const originalUrlInput = getByPlaceholderText('Original URL');
    const submitButton = getByText('Submit');
  
    fireEvent.change(originalUrlInput, { target: { value: 'www.google.com' } });
    fireEvent.click(submitButton);
  
    expect(handleSubmit).not.toHaveBeenCalled();     
});
*/
