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
        <h1 style={{ color: 'white' }}>BCSO Application</h1>
        <form
          name="bcsoapps"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="BCSO Application" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
               <p style={{ color: 'white' }}>
            <label>
              Your Email:<br />
              <input type="text" name="name" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Your Discord Username | Ex: ToxicDev#0001:<br />
              <input type="text" name="name" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Do You Understand That Breaking Laws In Anyway Shape Of Form Will Result In Immidiate And Swift Action?:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
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
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How Would You Deal With A Bank Robbery:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How Would You Deal With A Pursuit:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              In Detail Explain Your Skills In BCSO:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Why Do You Want To Join BCSO:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Why Should We Pick You Over Other Applicants 3 Sentences Minmum:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              What Does BCSO Do?:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              What Are Our Main Goals Here In BCSO:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
             Do You Understand If You Are Found Breaking Rules, Driving around with lights on for 
             no reason Or Caught Abusing Or Disrespecting People Out Of RP you will be  Suspended:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Do you understand You Can Be Suspended From BCSO For Disrespecting HRS:<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Thank You For Applying For BCSO Your Results Will Be With You Within 24-48 Hours State Yes To Submit!<br />
              <textarea name="position" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
