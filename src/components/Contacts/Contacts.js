import React from 'react';
import Contact from '../Contact/Contact';

const contacts = [1, 2, 3];

console.log(contacts);

function Contacts() {
  const renderedContacts = contacts.map((a, i) => <Contact key={i} />);

  return <div>{renderedContacts}</div>;
}

export default Contacts;
