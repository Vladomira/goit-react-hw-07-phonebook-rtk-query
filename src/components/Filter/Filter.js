import PropTypes from "prop-types";

const Filter = ({ filterValue, onChange }) => {
  return (
    <>
      <div className="fiter__box">
        <h3 className="contacts__title-find">Find contacts by name</h3>
        <label>
          <input
            className="contacts__input"
            type="text"
            name="filter"
            value={filterValue}
            onChange={(e) => onChange(e)}
            // onChange={(e) => dispatch(actions.filtredContacts(e.target.value))}
          ></input>
        </label>
      </div>
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  filterValue: PropTypes.string,
};
export default Filter;
