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
        <h1 style={{ color: 'white' }}>LFB Application</h1>
        <form
          name="lfbapps"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="LFB Application" />
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
              What Is  A Firefighters Job?:<br />
              <textarea name="What Is A Firefighters Job" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
            How would You Stop A RTC/MVA?:<br />
              <textarea name="How Would You Stop A RTC/MVA" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Name The Basic Fire Fighter Equipment:<br />
              <textarea name="Name Basic Fire Fighting Equipment" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How Would You Stop Fires In A Populated Area:<br />
              <textarea name="How Would You Stop Fires In A Populated Area" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How Would You Stop A Fire In A Populated Building?:<br />
              <textarea name="How Would You Stop Fires In A Populated Building" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
             Do you have any experience? Provide With Proof In Detail If Possible:<br />
              <textarea name="Experiences" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              What Skills Will You Bring To LFB:<br />
              <textarea name="What Skills Will You Bring To LFB" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Why Should We Pick You Over Other Applicants?:<br />
              <textarea name="Why Should We Pick You Over Others" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
             How active are you on a scale of 0-10?:<br />
              <textarea name="Activity Scale 01-10" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                      <p style={{ color: 'white' }}>
            <label>
            On a scale of 0-10 How Mature  would you rate yourself?:<br />
              <textarea name="Maturity Scale 01-10" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              What Are Our Main Goals Here In LFB:<br />
              <textarea name="What Are LFB Main Goals" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
             Do You Understand If You Are Found Breaking Rules, Driving around with lights on for 
             no reason Or Caught Abusing Or Disrespecting People Out Of RP you will be  Suspended:<br />
              <textarea name="Rule/TOS Agreement" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Do you understand You Can Be Suspended From SAHP For Disrespecting HRS:<br />
              <textarea name="Department Disrespect Policy" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              Thank You For Applying For LFB Your Results Will Be With You Within 24-48 Hours State Yes To Submit!<br />
              <textarea name="Thanks For Applying" style={{ width: '75%' }} onChange={this.handleChange} />
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
