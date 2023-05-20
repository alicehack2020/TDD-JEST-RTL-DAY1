import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"

// render
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

test("button should be render", () => {
    render(<Login />)
    const buttonInputEl = screen.getByRole("button")
    expect(buttonInputEl).toBeInTheDocument()
})

//input should be empty initially

test("usernmae input should be empty", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/enter name/i)
    expect(userInputEl.value).toBe("")
})

test("password input should be empty", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/enter password/i)
    expect(userInputEl.value).toBe("")
})

//button initially disabled
test("login button should disable initially", () => {
    render(<Login />)
    const buttonInputEl = screen.getByRole("button")
    expect(buttonInputEl).toBeDisabled()
})

test("loading should not be render", () => {
    render(<Login />)
    const buttonInputEl = screen.getByRole("button")
    expect(buttonInputEl).not.toHaveTextContent(/please wait/i)
})

//initially error mesage should hidden
test("login error should invisiable initially", () => {
    render(<Login />)
    const errorEl = screen.getByTestId("error")
    expect(errorEl).not.toBeVisible()
})

//value should change using on change
test("username input should change", () => {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/enter name/i)
    const testuser = "mangesh"
    fireEvent.change(userInputEl,{target:{value:testuser}})
    expect(userInputEl.value).toBe(testuser)
})

test("password input should be change", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i)
    const testpassword = "pass@1234"
    fireEvent.change(passwordInputEl, { target: { value:testpassword } })
    expect(passwordInputEl.value).toBe(testpassword)
})

test("button should not be disable when input exist", () => {
    render(<Login />)
    const buttonEl=screen.getByRole("button")
    const userInputEl=screen.getByPlaceholderText(/enter name/i)
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i)
    const testuser="mangesh"
    const testpassword = "pass@123"
    fireEvent.change(userInputEl, { target: { value: testuser } })
    fireEvent.change(passwordInputEl, { target: { value: testpassword } })
    expect(buttonEl).not.toBeDisabled()
})

test("loading should  be rendered when click ", () => {
    render(<Login />)
    const buttonInputEl = screen.getByRole("button")
    const userInputEl=screen.getByPlaceholderText(/enter name/i)
    const passwordInputEl = screen.getByPlaceholderText(/enter password/i)
    const testuser="mangesh"
    const testpassword = "pass@123"
    
    fireEvent.change(userInputEl, { target: { value: testuser } })
    fireEvent.change(passwordInputEl, { target: { value: testpassword } })
    fireEvent.click(buttonInputEl)

    expect(buttonInputEl).toHaveTextContent(/please wait/i)
})

