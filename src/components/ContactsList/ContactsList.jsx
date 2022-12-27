import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const viewContacts = contacts
    .filter(cont => cont.name.toLowerCase().includes(filter))
    .sort((first, second) => first.name.localeCompare(second.name));
  return (
    <div>
      <ul>
        {viewContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};
