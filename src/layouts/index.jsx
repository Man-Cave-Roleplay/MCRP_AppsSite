import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import logo from '../images/2B373E69-003D-4854-BD99-1F4AFED98133.png'

import "../css/typography.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Mancave Roleplay Official Applications Portal"
          meta={[
            { name: "description", content: "Interested in Apllying for a Service?, Reporting a bug or anything else of that nature? You can do so here." },
            { name: "keywords", content: "Department Of Dedicated Roleplay, top.gg" },
          ]}
        />
        <div
          style={{
            background: `#8A6AFD `,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
               Department Of Dedicated Roleplay
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
