import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  screen.getByText("CheckoutForm");
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  //Arrange
  const firstNameValue = screen.getByLabelText(/First Name/i);
  const lastNameValue = screen.getByLabelText(/Last Name/i);
  const addressValue = screen.getByLabelText(/Address/i);
  const cityValue = screen.getByLabelText(/City/i);
  const stateValue = screen.getByLabelText(/State/i);
  const zipValue = screen.getByLabelText(/Zip/i);
  const checkoutButton = document.querySelector("button");

  //Act
  userEvent.type(firstNameValue, "Philip");
  userEvent.type(lastNameValue, "Sherman");
  userEvent.type(addressValue, "42 Wallaby Way");
  userEvent.type(cityValue, "Sydney");
  userEvent.type(stateValue, "Australia");
  userEvent.type(zipValue, "1291");
  userEvent.click(checkoutButton);

  //Assert
  const completeMessage = document.querySelector();
});
