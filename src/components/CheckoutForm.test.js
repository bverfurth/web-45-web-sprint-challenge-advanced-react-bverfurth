import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  screen.getByText("CheckoutForm");
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  //Arrange
  const firstNameValue = screen.getByLabelText();
  const lastNameValue = screen.getByLabelText();
  const addressValue = screen.getByLabelText();
  const cityValue = screen.getByLabelText();
  const stateValue = screen.getByLabelText();
  const zipValue = screen.getByLabelText();
  const checkoutButton = document.querySelector("button");

  //Act

  //Assert
});
