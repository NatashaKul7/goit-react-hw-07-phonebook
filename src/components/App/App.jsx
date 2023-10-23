import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, filterContact } from 'redux/contactsSlice';

import { Container } from './App.styled';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export function App() {

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);


  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`Oops, the contact with name ${name} already exists`);
    }
    const newState = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newState))
  };

  // const handleDelete = id => {
  //   // setContacts(prevContacts => {
  //   //   return prevContacts.filter(contact => contact.name !== contactName);
  //   // });

  //   dispatch(deleteContact(id))
  // };


  const handleFilterChange = e => {
    dispatch(filterContact(e.currentTarget.value))
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

