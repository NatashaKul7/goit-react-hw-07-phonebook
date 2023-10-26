import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact, filterContact } from 'redux/contactsSlice';

import { Container } from './App.styled';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { addContacts, requestContacts } from 'redux/contacts/operations';
import { contactsReducer } from 'redux/contacts/contactsSlice';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts.item);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.contacts.isLoading);
  const error = useSelector(state => state.contacts.contacts.error);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`Oops, the contact with name ${name} already exists`);
    }
    const newState = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContacts(newState));
  };

  const handleFilterChange = e => {
    dispatch(contactsReducer.filterContact(e.currentTarget.value));
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Form handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <h3>There are no any contacts here</h3>
      ) : (
        <>
          <Filter onChange={handleFilterChange} filter={filter} />
          <Contacts contacts={filterContacts()} />
        </>
      )}
    </Container>
  );
}
