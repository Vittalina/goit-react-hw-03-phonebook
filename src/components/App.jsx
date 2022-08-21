import { Component } from 'react';
import { Box } from 'components/Box';
import Phonebook from 'components/Phonebook/Phonebook';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitData = data => {
    const filteredNames = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    console.log(filteredNames);

    if (filteredNames.length > 0) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  filterByName = value => {
    this.setState({
      filter: value.filter,
    });

    // this.setState({ filter: event.target.value });
  };

  onClickDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Box
        p={100}
        px
        mr="auto"
        ml="auto"
        width="500px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        as="main"
      >
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.onSubmitData} />
        <h2>Contacts</h2>

        <Filter onChange={this.filterByName} />
        <Contacts
          contacts={this.state.contacts}
          onClickDelete={this.onClickDelete}
        />
      </Box>
    );
  }
}

export default App;
