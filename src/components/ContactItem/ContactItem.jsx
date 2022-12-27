import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import { useDeleteContactMutation } from 'services/contactsApi';

export const ContactItem = ({ id, name, phone }) => {
  const { contactItem__btn } = styles;
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li>
      <span>
        {name}: {phone}
        <button
          type="button"
          className={contactItem__btn}
          onClick={() => {
            deleteContact(id);
          }}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
