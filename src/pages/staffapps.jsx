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
        <h1 style={{ color: 'white' }}>Staff Application</h1>
        <form
          name="staffapps"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Staff Application" />
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
              Discord name & discriminator? | (ex. XG.Mattis#0001):<br />
              <textarea name="Discord Username" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Steam Hex: Your Steam Hex Can Be Found Here http://www.vacbanned.com/:<br />
              <textarea name="Steam Hex" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
            Age: (MUST BE 14+ If Caught Lying You Will Be Removed):<br />
              <textarea name="Age" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How long have you been apart  Of DODRP?:<br />
              <textarea name="Time In DODRP" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Can you speak fluent English? (THIS IS MANDOTORY):<br />
              <textarea name="Do You Speak Fluent English" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Do you have a quality Mic (MUST HAVE):<br />
              <textarea name="Do You Have A Quality Mic" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Do you have any previous Staff experience from any other server If so please explain. Also State The Sever!:<br />
              <textarea name="Experience" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              How Long Have You Played FiveM Years or Months!:<br />
              <textarea name="How Long ON The FiveM Platform?" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Why do you want to be an Staff?:<br />
              <textarea name="Why Do You Want To Be Staff" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Why Should We Pick You Over Others?:<br />
              <textarea name="Why Shoudl We Pick You Over Others" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
              WExplain In You're Opinion What COC Is Chain Of Command:<br />
              <textarea name="What Is COC" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
             Do You Understand If You Are Found Breaking Rules, Driving around with lights on for 
             no reason Or Caught Abusing Or Disrespecting People Out Of RP you will be  Suspended:<br />
              <textarea name="Rules Agreement" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
             On a scale from 1-10, how mature would you consider yourself?:<br />
              <textarea name="Maturity Scale" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
                <p style={{ color: 'white' }}>
            <label>
             If A Member Violates A Minor Rule What Would You Do?:<br />
              <textarea name="What Would You Do If A Member Violates A Minor Rule" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
             If A Member Was Going Around Saying They Was Staff Threatening  Members ETC [Mini Modding] Explain What Action You Will Do/Take!:<br />
              <textarea name="What Would You Do If Someone Was Mini Modding" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              If A Staff Members Was Caught Abusing By You What Would You Do?:<br />
              <textarea name="What Would You Do If A Member Of Staff Was Caught Abusing" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              If A Person Joins Threatening To DDOX People/Members What Would You Do?:<br />
              <textarea name="What Would You Do If Someone Joined Threatening To DDOS The Server Or Members" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
             Any Notes About You Or Anything We Need To Know?:<br />
              <textarea name="Anything We Need To Know" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              By stating below that you agree, you are confirming that you have had no external support or 
              assistance in completing this application form & acknowledge that this form could take up to 
              1-2 weeks before getting a response & if caught lying will lead to you being Blacklisted from The Staff. *:<br />
              <textarea name="External Support Agreement" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              Please review your application thoroughly before you submit it. You will receive a copy emailed
              to you. If you do not get a response within 1-4 weeks then you should consider your application rejected.:<br />
              <textarea name="Review Check" style={{ width: '75%' }} onChange={this.handleChange} />
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
