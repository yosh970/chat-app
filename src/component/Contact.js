import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      online: this.props.online
    }
  }

  changeStatus = (e) => this.setState({online: !this.state.online});

  render() {
    return (
      <figure className="Contact">
        <img className="avatar" src={this.props.avatar} alt="avatar" />
        <figcaption>
          <div className="status" onClick={this.changeStatus}>
            <p className="name">{this.props.name}</p>
            <span className={this.state.online ? "status-online" : "status-offline"} />
            <p className="status-text">{this.state.online ? "online" : "offline"}</p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
