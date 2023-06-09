import css from './ContactList.module.css';
import ContactCard from '../ContactCard/ContactCard';
import PropTypes from 'prop-types';
const shortid = require('shortid');



export default function ContactList(props) {
  const { list, removeCard } = props;
  return (
    <ul className={css.contactList}>
      {list.map(item => {
        return (
          <ContactCard
            name={item.name}
            number={item.number}
            id={item.id}
            key={shortid.generate()}
            deleteCard={removeCard}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.array,
  removeCard: PropTypes.func,
};