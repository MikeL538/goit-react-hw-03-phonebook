import PropTypes from 'prop-types';

function Filter({ handleFilterChange }) {
  return (
    <input
      id="search"
      placeholder="Search contact"
      onChange={e => handleFilterChange(e.target.value)}
    />
  );
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
