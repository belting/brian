'use strict';

import React from 'react/addons';

const Status = {
  EMPTY: 0,
  SUBMITTING: 1,
  SUCCESS: 2,
  ERROR: 3
};

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: Status.EMPTY,
      name: '',
      email: '',
      message: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onNameChange(e) {
    this.setState({name: e.target.value});
  }
  onEmailChange(e) {
    this.setState({email: e.target.value});
  }
  onMessageChange(e) {
    this.setState({message: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();

    let name = this.state.name.trim();
    let email = this.state.email.trim();
    let message = this.state.message.trim();

    if (!name || !email || !message) {
      return;
    }

    this.send(name, email, message);
  }
  send(name, email, message) {
    this.setState({status: Status.SUBMITTING});

    let data = {
      name,
      email,
      message
    };

    $.ajax({
      url: '/mail',
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      success: () => this.setState({status: Status.SUCCESS}),
      error: () => this.setState({status: Status.ERROR})
    });
  }
  render() {
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;

    let status = this.state.status;
    let formClass = (status !== Status.SUCCESS) ? null : 'hidden';

    let successClass = 'success';
    if (status !== Status.SUCCESS) {
      successClass += ' invisible';
    }

    let errorClass = 'error';
    if (status !== Status.ERROR) {
      errorClass += ' hidden';
    }

    let submitClass = (status === Status.SUBMITTING) ? 'submitting' : null;

    return (
      <div>
        <p className={successClass}>
          <i className="material-icons">&#xE876;</i>
          Your message was successfully sent. I'll get back to you as soon as I can!
        </p>
        <form className={formClass} onSubmit={this.onSubmit}>
          <input type="text" name="name" placeholder="Name" value={name} onChange={this.onNameChange} required />
          <input type="email" name="email" placeholder="Email" value={email} onChange={this.onEmailChange} required />
          <textarea name="message" placeholder="Message" value={message} onChange={this.onMessageChange} required ></textarea>
          <button className={submitClass} type="submit">
            <span className="label">Send</span>
            <span className="loader"></span>
          </button>
          <p className={errorClass}>
            <i className="material-icons">&#xE000;</i>
            Your message could not be sent at this time. Please try again later.
          </p>
        </form>
      </div>
    );
  }
}
