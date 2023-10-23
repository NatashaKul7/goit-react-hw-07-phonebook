import { useDispatch } from 'react-redux';
import { ContactsBox } from './Contacts.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = ({ contacts }) => {

  const dispatch = useDispatch();
  const handleDelete = id => {
   
    dispatch(deleteContact(id))
  };

  return (
    <ContactsBox>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}> 
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactsBox>
  );
};
