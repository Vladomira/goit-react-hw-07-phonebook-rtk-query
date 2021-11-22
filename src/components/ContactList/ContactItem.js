import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import { useDeleteContactMutation } from "../../contacts-rtk/contactsSlice";

function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      <li id={id} key={id} className="contacts__item">
        {name}: <span className="contacts__number"> {number}</span>
        <button
          className="contacts__btn"
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </li>
    </>
  );
}
ContactItem.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
