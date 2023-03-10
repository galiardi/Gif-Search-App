import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const trimedInputValue = inputValue.trim();
    if (trimedInputValue.length <= 1) return;
    onAddCategory(trimedInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Busca gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};
