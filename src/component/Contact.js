import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';
class Contact extends React.Component {
  render() {
    return(
      <figure className="Contact">
        <img className="avatar" src={this.props.avatar} alt="avatar"/>
        <figcaption>
          <p className="name">{this.props.name}</p>
          <div className="status">
            <span className={this.props.online ? "status-online": "status-offline"}/>
            <p className="status-text">{this.props.online ? "online": "offline"}</p>
          </div>
        </figcaption>
      </figure>
    )
  }
}

Contact.propTypes= {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
}

export default Contact;