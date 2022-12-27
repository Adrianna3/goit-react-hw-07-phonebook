import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactItem = ({ id, name, number }) => {
  const { contactItem__btn } = styles;
  const dispatch = useDispatch();
  return (
    <li>
      <span>
        {name}: {number}
        <button
          type="button"
          className={contactItem__btn}
          onClick={() => {
            dispatch(deleteContact(id));
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
  number: PropTypes.string.isRequired,
};
