import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = (props) => {
  return (
    <figure className="Contact">
      <img className="avatar" src={props.avatar} alt="avatar" />
      <figcaption>
        <p className="name">{props.name}</p>
        <div className="status">
          <span className={props.online ? "status-online" : "status-offline"} />
          <p className="status-text">{props.online ? "online" : "offline"}</p>
        </div>
      </figcaption>
    </figure>
  );
}

Contact.propTypes= {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
}

export default Contact;