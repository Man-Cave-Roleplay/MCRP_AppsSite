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
        <h1 style={{ color: 'white' }}>SAHP Application</h1>
        <form
          name="sahpapps"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="SAHP Application" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Your Email:<br />
              <input type="text" name="Email" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Your Discord Username | Ex: XG.Mattis#0001:<br />
              <input type="text" name="Discord Username" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Do You Understand That Breaking Laws In Anyway Shape Of Form Will Result In Immidiate And Swift Action?:<br />
              <textarea name="law breaking agreement" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
             Question One: Do You Have Any Prior Experience In Law Enforcement In Anyway If so please state proof below if Not Type Negative:<br />
              <textarea name="experience" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Question Two: How Would You Deal With A Officer Down:<br />
              <textarea name="How Would You Deal With A Officer Down" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How Would You Deal With A Bank Robbery:<br />
              <textarea name="How Would You Deal With A Bank Robbery" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How Would You Deal With A Pursuit:<br />
              <textarea name="How Would You Deal With A Pursuit" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              In Detail Explain Your Skills In SAHP:<br />
              <textarea name="In Detail Explain Your Skills In This Department" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Why Do You Want To Join SAHP:<br />
              <textarea name="Why Do You Want To Join This Department" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Why Should We Pick You Over Other Applicants 3 Sentences Minmum:<br />
              <textarea name="Why Should We Pick You Over Other Applicants" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              What Does SAHP Do?:<br />
              <textarea name="What Does This Department Do" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              What Are Our Main Goals Here In SAHP:<br />
              <textarea name="Deprtment Goals style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
             Do You Understand If You Are Found Breaking Rules, Driving around with lights on for 
             no reason Or Caught Abusing Or Disrespecting People Out Of RP you will be  Suspended:<br />
              <textarea name="Abuse Agreement" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Do you understand You Can Be Suspended From SAHP For Disrespecting HRS:<br />
              <textarea name="Department Agreement" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Thank You For Applying For SAHP Your Results Will Be With You Within 24-48 Hours State Yes To Submit!<br />
              <textarea name="Submit" style={{ width: '75%' }} onChange={this.handleChange} />
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
