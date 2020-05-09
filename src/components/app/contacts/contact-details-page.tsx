import React, { useState } from "react";
import useReactRouter from "use-react-router";
import HeaderApp from "../../utils/HeaderApp";

import "./Contacts.scss";

import PhoneIcon from "../../../assets/icons/phone-fill.svg";
import MessageIcon from "../../../assets/icons/message.svg";
import FacetimeIcon from "../../../assets/icons/facetime.svg";
import MailIcon from "../../../assets/icons/mail-fill.svg";
import DollarIcon from "../../../assets/icons/dollar.svg";
import { ReactSVG } from "react-svg";


const ContactDetailsPage: React.FC = () => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => setEdit(!edit);

  const { location, history } = useReactRouter();

  const backToContacts = () => history.push(location.pathname.slice(0, location.pathname.lastIndexOf("/")));

  return (
    <div id="contact-details-page">
      <HeaderApp
        leftText={edit ? "Cancel" : "Contacts"}
        leftBackIcon={true}
        leftOnClick={edit ? toggleEdit : backToContacts}
        rightText={edit ? "Done" : "Edit"}
        rightOnClick={toggleEdit}
        noBorder={true}
      />
      <div className="photo-container">
        <div id="contact-photo" className={edit ? "photo-lg" : ""}>
          JD
        </div>
      </div>
      {edit ? <EditContactDetails /> : <ContactDetails />}
    </div>
  );
};

const ContactDetails: React.FC = () => {
  return (
    <React.Fragment>
      <h2>John Doe</h2>
      <div className="btn-row">
        <div className="btn-container">
          <div className="circle-btn">
            <ReactSVG className="icon" src={MessageIcon}></ReactSVG>
          </div>
          <h4>message</h4>
        </div>
        <div className="btn-container">
          <div className="circle-btn">
            <ReactSVG className="icon" src={PhoneIcon} />
          </div>
          <h4>call</h4>
        </div>
        <div className="btn-container">
          <div className="circle-btn">
            <ReactSVG className="icon" src={FacetimeIcon} />
          </div>
          <h4>video</h4>
        </div>
        <div className="btn-container">
          <div className="circle-btn">
            <ReactSVG id="mail-icon" className="icon" src={MailIcon} />
          </div>
          <h4>mail</h4>
        </div>
        <div className="btn-container disable">
          <div className="circle-btn">
            <ReactSVG id="dollar-icon" src={DollarIcon} />
          </div>
          <h4>pay</h4>
        </div>
      </div>
      <ul id="contact-details-list">
        <li>
          <h4>Phone</h4>
          <h2>555 512 35</h2>
        </li>
        <li>
          <h4>Notes</h4>
          <p>Hello !</p>
        </li>
        <li>
          <h2>Send Message</h2>
        </li>
        <li>
          <h2>Share Contact</h2>
        </li>
        <li>
          <h2>Add to Favourites</h2>
        </li>
        <li>
          <h2 className="text-red">Add to Emergency Contacts</h2>
        </li>
        <li className="separator separator-md" />
        <li>
          <h2>Share My Location</h2>
        </li>
        <li className="separator separator-lg" />
      </ul>
    </React.Fragment>
  );
};

const EditContactDetails: React.FC = () => {
  return (
    <React.Fragment>
      <h3>Add photo</h3>
      <ul id="contact-details-list">
        <li>
          <input type="text" name="firstname" id="firstname" placeholder="First name" />
        </li>
        <li>
          <input type="text" name="lastname" id="lastname" placeholder="Last name" />
        </li>
        <li>
          <input type="number" name="phone" id="phone" placeholder="Phone" />
        </li>
        <li className="separator" />
        <li>
          <input type="text" name="firstname" id="firstname" placeholder="Email" />
        </li>
        <li className="separator" />
        <li>
          <h4>Notes</h4>
          <textarea name="notes" id="notes" rows={3}></textarea>
        </li>
        <li className="separator" />
        <li>
          <h2 className="text-red">Delete contact</h2>
        </li>
        <li className="separator separator-lg" />
      </ul>
    </React.Fragment>
  );
};

export default ContactDetailsPage;
