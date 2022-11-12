import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
// import{logRoles} from '@testing-library/dom'
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color, and updates when clicked', () => {
  // const { container } = render(<App />);
  // logRoles(container);
 render(<App />);

 // find an element with a role of button and text of 'Change to blue'
 const colorButton = screen.getByRole('button', { name: 'Change to blue'});

 // expect the background color to be red
 expect(colorButton).toHaveStyle({ backgroundColor: 'red'})

 // click button
 fireEvent.click(colorButton);

 expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
 expect(colorButton).toHaveTextContent('Change to red')
});

test('initial conditions', () => {
  render(<App />);

  // check that th button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled()

  // check that the cjeckbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('button disables and enables when checbox clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  fireEvent.click(checkbox);
  // check if the button disables when checkbox checked
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox)
    // check if the button enables when checkbox unchecked
  expect(colorButton).toBeEnabled();
})

test('button turns gray when disabled and go back to color when enabled', () => {
  // flow 1
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('backgroundColor: red');
})

test('Clicked disabled button has gray background and reverts to blue', () => {
  // flow 2
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle('backgroundColor: gray')
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'blue '})

})


// test('button turns blue when clicked', () => {
//  render(<App />);
//  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

// });

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one capital letter', () =>{
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumViolentRed')).toBe('Medium Violent Red');
  });
})
