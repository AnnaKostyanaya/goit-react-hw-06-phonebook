import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import style from '../App/App.module.css';

const App = () => {

return (
  <div className={style.container}>
    <h1 className={style.main_title}>Phonebook</h1>
    <ContactForm />
    <h2 className={style.title}>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);
}

export default App;

