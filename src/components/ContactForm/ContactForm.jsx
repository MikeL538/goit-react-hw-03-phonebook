import PropTypes from 'prop-types';
import css from './contactForm.module.css';

function ContactForm({ name, number, handleInputChange, handleAddContact }) {
  return (
    <form className={css.form} onSubmit={handleAddContact}>
      <p>Name</p>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        // W Firefox i edge wyskakuje multum błędów przez tę linijkę
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p>Number</p>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        // W Firefox i edge wyskakuje multum błędów przez tę linijkę
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
