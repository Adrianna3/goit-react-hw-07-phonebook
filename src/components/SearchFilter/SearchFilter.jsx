import styles from './SearchFilter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const SearchFilter = () => {
  const dispatch = useDispatch();

  const findByName = evt => {
    evt.preventDefault();
    const input = evt.target.value.toLowerCase();
    dispatch(filterContacts(input));
  };

  const {
    searchFilter,   
    searchFilter__input } =
    styles;
  return (
    <div className={searchFilter}>
      <label>
        Find contacts by name
        <input
          className={searchFilter__input}
          type="text"
          onChange={findByName}
        />
      </label>
    </div>
  );
};

