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
        <h1 style={{ color: 'white' }}>Ban Appeals</h1>
        <form
          name="appeal"
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
              <input type="text" style={{ width: '75%' }} name="Email" onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Your Discord Username and Tag| Ex: XG.Mattis#0001:<br />
              <input type="id" style={{ width: '75%' }} style={{ width: '75%' }} name="Discord Username" onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Your Steam Hex Can Be Found Here http://www.vacbanned.com/:<br />
              <textarea name="Steam Hex" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
             Why Was You Punished?:<br />
              <textarea name="Reason Of Ban/Punishment" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How Long Is Your Ban?:<br />
              <textarea name="How Long Is Your Punishment/Ban" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              If You Have Proof To Fight Against Your Ban And Prove Your Innocence Please State Here:<br />
              <textarea name="Proof Your Innocent" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
             Discord Username Of Staff Who Punished You:<br />
              <textarea name="Discord Username Of Staff Who Punished You" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Do You Understand By Pressing Submit You Accept Our TOS/Rules And Promise To Follow Them If UnPunished:<br />
              <textarea name="TOS/Rule Agreement" style={{ width: '75%' }} onChange={this.handleChange} />
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
