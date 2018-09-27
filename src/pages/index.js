import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>My name is Arvin Lin, and I'm a Computer Science student at Cuesta College.</p>
    <p>I'm really into Web Development, and I want to become a backend software engineer in the future</p>
    <p>I've taken Algorithm, Data Structure, and Discrete Structure, so I have decent amount of knowledge</p>
    <p>in code complexity and structuring program.</p>
    <p>I've recently worked on Nodejs server, and I think it was a fun, meaningful, quite </p>
    <p>impressive. It is surprising how far we have come in server development and Javascript, and</p>
    <p>creating server has become something intuitive and simple.</p>
    <p>I also spent plenty of hours on creating frontend framework, using Reactjs and Angularjs.</p>
    <p>I am familiar with the life cycle of the components, and I am also familiar with the </p>
    <p>popular framework, redux.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
