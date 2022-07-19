import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container, ContactForm, Filter, ContactList } from 'components';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Section, MainTitle, Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    if (contacts.find(el => el.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(s => [newContact, ...s]);
  };

  const deleteContact = id => {
    setContacts(s => s.filter(el => el.id !== id));
  };

  const handleFilterByName = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Section>
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={addContact} />
        <Title>Contacts</Title>
        <Filter
          value={filter}
          onChange={e => setFilter(e.currentTarget.value)}
        />
        <ContactList contacts={handleFilterByName()} onDelete={deleteContact} />
      </Container>
    </Section>
  );
};
