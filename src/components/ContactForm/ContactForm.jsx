import { nanoid } from 'nanoid';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/contactsApi';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const phone = form.phone.value;

    if (contacts.find(cont => cont.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      try {
        await addContact({
          id: nanoid(),
          name,
          phone,
        });
      } catch (error) {
        alert(`Failed! Save error`);
      }

      form.reset();
    }
  };

  const {
    contactForm__form,
    contactForm__label,
    contactForm__input,
    contactForm__btn,
  } = styles;

  return (
    <form className={contactForm__form} onSubmit={handleSubmit}>
      <label className={contactForm__label}>
        Name
        <input
          className={contactForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={contactForm__label}>
        Phone
        <input
          className={contactForm__input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={contactForm__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
