import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
import { saveToLocalStorage } from 'services/localStorageServices';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    saveToLocalStorage(contacts);
  }, [contacts]);

  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   if (name === 'name') {
  //     setName(value);
  //   }
  //   if (name === 'number') {
  //     setNumber(value);
  //   }
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;
    
    if (contacts.find(cont => cont.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number, id: nanoid() }));
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
        Number
        <input
          className={contactForm__input}
          type="tel"
          name="number"
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
