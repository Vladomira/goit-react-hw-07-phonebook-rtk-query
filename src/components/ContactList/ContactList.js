import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ContactItem from "./ContactItem";
import { useGetContactsQuery } from "../../contacts-rtk/contactsSlice";
import Spinner from "../Loader/Spinner";
import Filter from "components/Filter";

function ContactList() {
  const { data: contacts, isFetching, isError } = useGetContactsQuery();
  const [filterValue, setFilterValue] = useState("");
  const [filtredContacts, setFiltredContacts] = useState([]);

  const filteredData = (e) => {
    const { value } = e.currentTarget;
    setFilterValue(value);
  };
  useEffect(() => {
    if (filterValue !== "") {
      const normalizeFilter = filterValue.toLowerCase();
      const showContacts = contacts.filter((item) =>
        item.name.toLowerCase().includes(normalizeFilter)
      );
      return setFiltredContacts(showContacts);
    }
  }, [filterValue, contacts]);

  return (
    <section className="contacts__section">
      <Filter vlue={filterValue} onChange={filteredData} />

      <h2 className="contacts__title">Contacts</h2>
      {filterValue !== "" && (
        <ul>
          {filtredContacts.map((el) => {
            return (
              <ContactItem
                key={el.id}
                name={el.name}
                number={el.number}
                id={el.id}
              />
            );
          })}
        </ul>
      )}
      {isFetching && <Spinner />}
      <ul className="contacts__list">
        {isError && <p className="contacts__title">"Not found"</p>}

        {contacts &&
          !isError &&
          !filterValue &&
          contacts.map(({ name, number, id }) => {
            return <ContactItem key={id} name={name} number={number} id={id} />;
          })}
      </ul>
    </section>
  );
}
ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

export default ContactList;
