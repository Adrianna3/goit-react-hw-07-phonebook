import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <SearchFilter />
        <ContactsList />
      </Section>
    </div>
  );
};
