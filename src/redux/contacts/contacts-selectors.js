export const getAllContacts = ({contacts}) => contacts;
export const filter = ({filter}) => filter;


export const getFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts;
    }
    const getVisibleContacts = () => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(lowerCaseFilter),
    );
    };
    
    const visibleContacts = getVisibleContacts();

    return visibleContacts;
}