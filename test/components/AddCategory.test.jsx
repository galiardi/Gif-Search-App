import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing components/AddCategory ', () => { 

  test('debe cambiar el valor de la caja de texto', () => {

    const inputValue = 'Soy Goku';
    
    render(<AddCategory onAddCategory={() => {}}/>);
     
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {target: {value: inputValue}});
    expect(input.value).toBe(inputValue);

  });

  test('debe llamar onAddCategory si el input tiene un valor', () => {
    
    const inputValue= 'Soy Goku';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);

  });

  test('no debe llamar onAddCategory si el input esta vacio', () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onAddCategory).not.toBeCalled();

  });

 });


