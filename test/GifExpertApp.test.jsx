import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'
describe('Testing src/GifExpertApp', () => { 
 
 test('debe hacer match con el snapshot', () => {
   
  const { container } = render(<GifExpertApp />);
  expect(container).toMatchSnapshot();
  
 });
 
 test('debe renderizar una nueva categoria segun inputValue', async() => {
   const inputValue = 'friends';

   render(<GifExpertApp />);

   const input = screen.getByRole('textbox');
   const form = screen.getByRole('form');
   fireEvent.input(input, {taget: {value: inputValue}});
   fireEvent.submit(form);

  //  await waitFor(() => {
  //   expect(screen.getByText(inputValue));
  //  });

   screen.debug();
 });
 
 });