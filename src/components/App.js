import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import "../styles/index.scss";

//
function App() {
  return (
    <div className="container">
      <h1 className="header">Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}
export default App;
