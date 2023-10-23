import { useState } from 'react';
import { FormBox } from './Form.styled';

export function Form({ handleAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactData = {
      name,
      number,
    };

    handleAddContact(contactData);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormBox onSubmit={handleSubmit}>
      <h1>Phonebook</h1>
      <label htmlFor="nameId"></label>
      <p>Name</p>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Gomez Simpson"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        id="nameId"
      />
      <label htmlFor="numberId"></label>
      <p>Number</p>
      <input
        type="tel"
        name="number"
        value={number}
        placeholder="777-77-77"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        id="numberId"
      />
      <button type="submit">Add contact</button>
    </FormBox>
  );
}
