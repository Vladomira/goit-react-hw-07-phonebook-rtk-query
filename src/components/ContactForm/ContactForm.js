import { useState } from "react";
import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateContactMutation } from "../../contacts-rtk/contactsSlice";
import { useGetContactsQuery } from "../../contacts-rtk/contactsSlice";

function ContactForm() {
  const [createContact] = useCreateContactMutation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { data: contacts } = useGetContactsQuery();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const doubleName = (name) =>
    contacts.find((el) => {
      return el.name.toLowerCase() === name.toLowerCase();
    });
  const doubleNumber = (number) =>
    contacts.find((el) => {
      return el.number === number;
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!doubleName(name) && !doubleNumber(number)) {
      createContact({ name, number });
      scroll();
    }

    reset();

    if (doubleName(name)) {
      return toast.error(`This name ${name} already exists in the database`);
    }
    if (doubleNumber(number)) {
      return toast.error(
        `This number ${number} already exists in the database`
      );
    }

    toast.success(`${name} successfully added ;)`);
    // scroll();

    return;
  };
  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <>
      <form className="form__box" onSubmit={handleSubmit}>
        <label className="form__label-box">
          <span className="form__label">Name</span>
          <input
            className="form__input"
            value={name}
            onChange={handleChange}
            id={shortid.generate()}
            type="text"
            name="name"
            data-action="name"
            pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
            title="?????? ?????????? ???????????????? ???????????? ???? ????????, ??????????????????, ???????? ?? ????????????????. ???????????????? Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ?? ??. ??."
            required
          />
        </label>
        <label className="form__label-box">
          <span className="form__label"> Number</span>
          <input
            className="form__input"
            onChange={handleChange}
            value={number}
            id={shortid.generate()}
            type="tel"
            name="number"
            data-action="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="?????????? ???????????????? ???????????? ???????????????? ???? ????????, ?? ?????????? ?????????????????? ??????????????, ????????, ?????????????? ????????????, ?? ?????????? ???????????????????? ?? +"
            required
          />
        </label>

        <div className="form__btn-thumb">
          <button
            className="form__addBtn"
            type="submit"
            disabled={!number || !name}
          >
            Add contact
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default ContactForm;
