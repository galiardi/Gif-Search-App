import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={onSubmit} aria-label='form' >
      <input type="text" placeholder="Busca gifs" value={inputValue} onChange={onInputChange} />
    </form>
  );
};

AddCategory.propTypes= {
  onAddCategory: PropTypes.func.isRequired,
}