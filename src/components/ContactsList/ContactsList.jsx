import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'services/contactsApi';

export const ContactsList = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
  const viewContacts = contacts
    .filter(cont => cont.name.toLowerCase().includes(filter))
    .sort((first, second) => first.name.localeCompare(second.name));
  return (
    <div>
      <ul>
        {viewContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </ul>
    </div>
  );
};
