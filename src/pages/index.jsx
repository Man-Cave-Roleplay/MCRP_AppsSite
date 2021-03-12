import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import '../css/custom.tachyons.css';


export default class Index extends React.Component {
  render() {
    return (
      <div>
        <p style={{ color: 'white' }}>
          If you're interested in Aplying to be a member of one of our Serivces?? Appeal a ban or anything else you're in the right place, Please choose from one of the Forms Below
        </p>
        <ul>
          <li style={{ color: '#8A6AFD' }}><Link to="/staffapps/" style={{ color: '#00B0E1' }}>Staff Application</Link></li>
          <li style={{ color: '#8A6AFD' }}><Link to="/devapps/" style={{ color: '#00B0E1' }}>Developer Application</Link></li>
          <li style={{ color: '#8A6AFD' }}><Link to="/depthead/" style={{ color: '#00B0E1' }}>Department Head Application</Link></li>
          <li style={{ color: '#8A6AFD' }}><Link to="/nhsapps/" style={{ color: '#00B0E1' }}>NHS Application</Link></li>
          <li style={{ color: '#8A6AFD' }}><Link to="/metpsapps/" style={{ color: '#00B0E1' }}>Metropolitan Police Application</Link></li>
          <li style={{ color: '#8A6AFD' }}><Link to="/lfbapps/" style={{ color: '#00B0E1' }}>LFB Application</Link></li>        
      </ul>
      </div>
    );
  }
}
