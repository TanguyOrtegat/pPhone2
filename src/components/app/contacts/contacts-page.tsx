import React from "react";
import "./Contacts.scss";
import { Link } from "react-router-dom";
import useReactRouter from "use-react-router";
import HeaderApp from "../../utils/HeaderApp";

interface Contact {
  id: number;
  firstname: string;
  lastname?: string;
}

const defaultContacts: Contact[] = [
  { id: 1, firstname: "Jane", lastname: "Doe" },
  { id: 2, firstname: "John", lastname: "Doe" },
  { id: 3, firstname: "Martin", lastname: "Madrazo" },
  { id: 4, firstname: "Trevor", lastname: "Philips" },
  { id: 5, firstname: "Ruben", lastname: "Taylor" },
  { id: 6, firstname: "Travis" },
];

const ContactsPage: React.FC = () => {
  const { location } = useReactRouter();
  const getSeparator = (char: string) => (
    <li id={char} key={char} className="separator">
      <h2>{char}</h2>
    </li>
  );

  const getContact = (contact: Contact) => {
    return (
      <li key={contact.id}>
        <Link to={`${location.pathname}/${contact.id}`}>
          {contact.lastname ? (
            <h3>
              {contact.firstname} <span className="bold">{contact.lastname}</span>
            </h3>
          ) : (
            <h3 className="bold">{contact.firstname}</h3>
          )}
        </Link>
      </li>
    );
  };

  const getContacts = () => {
    let previousChar = "";
    let char = "";
    let childrens = [];

    for (let i = 0; i < defaultContacts.length; i++) {
      const contact = defaultContacts[i];
      char = (contact.lastname ? contact.lastname.substring(0, 1) : contact.firstname.substring(0, 1)).toUpperCase();

      if (char != previousChar) {
        childrens.push(getSeparator(char));
      }
      previousChar = char;

      childrens.push(getContact(contact));
    }

    return childrens;
  };

  return (
    <React.Fragment>
      <HeaderApp leftText="Groups" title="Contacts" rightPlusIcon={true} onSearchChanged={(text) => undefined} />
      <div className="page-container">
        <ul id="contact-list">{getContacts()}</ul>
      </div>
    </React.Fragment>
  );
};

export default ContactsPage;
