import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "./App.js";


test("Renders without Errors" , () => {
    render(<App />);
    console.log("app renders properly:")
})