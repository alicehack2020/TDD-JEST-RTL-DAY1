import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 
test("3 items required in list", () => {
  render(<App />)
  const list = screen.getAllByRole("listitem")
  expect(list).toHaveLength(3)
})

// test("sum should be 30", () => {
//   render(<App />)
//   const sum = screen.getByTitle("sum")
//   expect(sum.textContent).toBe("30")

// })

test("sum should be 30", () => {
  render(<App/>)
  const sum = screen.getByTestId("sum")
   expect(sum.textContent).toBe("30")
})