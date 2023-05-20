import { render, screen } from "@testing-library/react"
import Login from "./Login"

test("username input should be render", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/enter name/i)
    expect(userInputEl).toBeInTheDocument()
})

test("userpassword input should be render", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i)
    expect(passwordInputEl).toBeInTheDocument()
})

test("userpassword input should be render", () => {
    render(<Login />)
    const buttonInputEl = screen.getByRole("button")
    expect(buttonInputEl).toBeInTheDocument()
})

