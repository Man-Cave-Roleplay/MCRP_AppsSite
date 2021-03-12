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
        <h1 style={{ color: 'white' }}>Service Executive Applications</h1>
        <form
          name="depthead"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Service Executive Applications" />
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
              <textarea name="Discord Username" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              What Department Are You Applying To Become A Department Head For?:
               Curent Positons Avalible
               [NHS] Director And Below
               [LFB] Chief Fire Officer Of Police And Below
               [NCA] Director And Below
               [NPAS] Chief Fire Officer And Below
               [Communications Centre] Control Coordinator And Below
                    <br />
              <textarea name="The Position Your Are Applying For" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
         <p style={{ color: 'white' }}>
            <label>
              Why Are You Applying For This Department?:<br />
              <input type="text" name="Why Are You Applying To Run This Department" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              What Can You Bring To This Department?:<br />
              <textarea name="positWhat Can You Bring To This Department" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
          <p style={{ color: 'white' }}>
            <label>
              What Experience Do You Have Within This Department? *MUST LIST SERVER NAMES/PROOF*:<br />
              <textarea name="experience" style={{ width: '75%' }} onChange={this.handleChange} />
            </label>
          </p>
            <p style={{ color: 'white' }}>
            <label>
              What Is The First 5 Things You Will Do If Accepted?:<br />
              <textarea name="First 5 Things TO-DO When/If Accepted" style={{ width: '75%' }} onChange={this.handleChange} />
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
              Do You Understand The General Public Can Vote Any Service Executive Out Of Position If 
              They Feel They Are Failing Them As A Executive A Majority Of The Public Have To Vote 
              Publicly On A Google Forums If Voted Out You Will Be Able To Re Apply! After 2 Days:<br />
              <textarea name="General Public Vote Out Agreement" style={{ width: '75%' }} onChange={this.handleChange} />
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
