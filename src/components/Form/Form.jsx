import { FormBox } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';

export function Form() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts.item);

  const handleAddContact = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const newState = {
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
      return alert(`Oops, the contact with name ${name} already exists`);
    }

    dispatch(addContacts(newState));
    e.target.reset();
  };

  return (
    <FormBox onSubmit={handleAddContact}>
      <h1>Phonebook</h1>
      <label htmlFor="nameId"></label>
      <p>Name</p>
      <input
        type="text"
        name="name"
        placeholder="Gomez Simpson"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="nameId"
      />
      <label htmlFor="numberId"></label>
      <p>Number</p>
      <input
        type="tel"
        name="number"
        placeholder="777-77-77"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="numberId"
      />
      <button type="submit">Add contact</button>
    </FormBox>
  );
}
