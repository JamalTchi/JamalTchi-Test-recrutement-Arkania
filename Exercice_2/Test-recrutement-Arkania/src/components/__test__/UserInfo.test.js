import React from "react"
import UserInfo from "../UserInfo"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


test("button visible", () => {
    const { getByTestId } = render(<UserInfo />);
    const button = getByTestId('button');

    expect(button).toBeVisible()
    expect(button).toHaveAttribute('type', 'submit')
})


test("image load", () => {
    const component = render(<UserInfo />);
    const image = component.getByRole('img')

    fireEvent.load(image);
})