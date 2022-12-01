// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count').textContent;
  expect(initialCount).toEqual('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByRole("button", { name: "+" });
  const initialCount = screen.getByTestId('count').textContent;
  fireEvent.click(incrementButton);
  const finalCount = screen.getByTestId('count').textContent;
  expect(+initialCount + 1).toEqual(+finalCount);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByRole("button", { name: "-" });
  const initialCount = screen.getByTestId('count').textContent;
  fireEvent.click(incrementButton);
  const finalCount = screen.getByTestId('count').textContent;
  expect(+initialCount - 1).toEqual(+finalCount);
});
