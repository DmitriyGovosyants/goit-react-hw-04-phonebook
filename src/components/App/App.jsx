import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, ContactForm, Filter, ContactList } from 'components';
import { Section, MainTitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.find(el => el.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prev => ({ contacts: [newContact, ...prev.contacts] }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilterByName = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const {
      addContact,
      handleFilterChange,
      handleFilterByName,
      deleteContact,
    } = this;
    const visibleContacts = handleFilterByName();

    return (
      <Section>
        <Container>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm onSubmit={addContact} />
          <Title>Contacts</Title>
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </Container>
      </Section>
    );
  }
}
