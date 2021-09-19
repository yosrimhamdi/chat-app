import React from 'react';
import faker from 'faker';

import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <img
        src={faker.image.avatar()}
        alt="contact image"
        className="contact__photo"
      />
      <div className="contact__details">
        <h3 className="contact__name">{faker.name.findName()}</h3>
        <p className="contact__last-message">{faker.lorem.words(5)}</p>
      </div>
    </div>
  );
}

export default Contact;
