import PropTypes from 'prop-types';

function ContactListItem({ contact, onDeleteContact }) {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li>
      {contact.name} {contact.number}{' '}
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
