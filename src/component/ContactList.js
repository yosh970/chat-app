import React from 'react'
import Contact from './Contact'
import CONTACT_LIST from '../data/userContacts'

const ContactList = () => (
  <div>
    {CONTACT_LIST.map(user =>(
      <Contact
      name={user.name}
      avatar={user.avatar}
      online={user.online}
      key={user.name}
    />
    ))}
  </div>
)

export default ContactList;