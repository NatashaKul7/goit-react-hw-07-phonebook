import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsSlice';

import { Container } from './App.styled';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { requestContacts } from 'redux/contacts/operations';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts.item);
  const isLoading = useSelector(state => state.contacts.contacts.isLoading);
  const error = useSelector(state => state.contacts.contacts.error);
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const handleFilterChange = value => {
    dispatch(filterContact(value));
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Form />
      <h2>Contacts</h2>
      {isLoading && !error && <h3>Loading...</h3>}
      {contacts.length !== 0 && (
        <>
          <Filter onChange={handleFilterChange} filter={filter} />
          <Contacts contacts={filterContacts()} />
        </>
      )}
    </Container>
  );
}
