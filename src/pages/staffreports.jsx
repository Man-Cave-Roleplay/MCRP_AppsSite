import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <h1 style={{ color: 'white' }}>Staff Reports</h1>
        <form
          name="staffreports"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Your Email:<br />
              <input type="text" style={{ width: '75%' }} name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Your Discord Username and Tag| Ex: XG.Mattis#0001:<br />
              <input type="id" style={{ width: '75%' }} style={{ width: '75%' }} name="email" onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
             Discord Username And Tag Of The Staff Member You Are Reporting :<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Whitnesses Usernames If Non State None:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
            What Did They Do Please Answer In Detail?:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Evidence Of What They Did?:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
            What Punishment Do You Recommend They Get For Doing What They Did?:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Do You Understand By Pressing Submit You Accept Our TOS/Rules:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
