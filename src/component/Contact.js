import React from 'react';
import './Contact.css'

const name = "Letitia Howell";
const avatar = "https://randomuser.me/api/portraits/women/41.jpg";
const online = true;

function Contact() {
  return(
    <figure className="Contact">
      <img className="avatar" src={avatar}/>
      <figcaption>
        <p className="name">{name}</p>
        <div className="status">
          <span className={online ? "status-online": "status-offline"}/>
          <p className="status-text">{online ? "online": "offline"}</p>
        </div>
      </figcaption>
    </figure>
  )
};

export default Contact;