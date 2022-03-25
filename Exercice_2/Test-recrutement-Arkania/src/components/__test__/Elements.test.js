import React from "react"
import Elements from "../Elements"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


test("title is renders", () => {
    const { getByTestId } = render(<Elements />);
    const titleEl = getByTestId('title')

    expect(titleEl.textContent).toBe('Je suis un titre')
})