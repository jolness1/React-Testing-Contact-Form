import React from 'react';
import {act} from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test("Renders without error", async() => {
    
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    
    
    userEvent.type(firstNameInput, "Eddy");
    userEvent.type(lastNameInput, "Burke");
    userEvent.type(emailInput, "email@email.com");
    userEvent.type(messageInput, "This is a message from the past!");
    
    const button = screen.getByRole("button", {type:"submit"})
        await act (async () => {
            userEvent.click(button);
          });
    const error = await screen.findByText((content) =>
      content.includes("Looks like there was an error")
    );



})