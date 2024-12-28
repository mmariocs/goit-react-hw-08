import { useDispatch } from "react-redux";
import { addContact, deleteContact } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <h1>Contacts</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const name = form.elements.name.value;
          const phone = form.elements.phone.value;
          handleAddContact({ name, phone });
          form.reset();
        }}
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="phone" placeholder="Phone" required />
        <button type="submit">Add Contact</button>
      </form>

      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleFilterChange}
      />

      {isLoading ? (
        <p>Loading contacts...</p>
      ) : (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
              <button onClick={() => handleDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsPage;
