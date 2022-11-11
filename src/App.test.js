import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
// import{logRoles} from '@testing-library/dom'

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





test('button turns blue when clicked', () => {
 render(<App />);
 const colorButton = screen.getByRole('button', { name: 'Change to blue' });

});
