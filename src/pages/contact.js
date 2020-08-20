import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet';
import { Row, Col } from 'antd';
import { graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import Navbar from 'components/nav-bar';
import ContactForm from 'components/contact-form';
import LineBreak from 'components/line-break';
import Footer from 'components/footer';
import KaileyAvatar from 'components/kailey-avatar';

const contact = (props) => {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #f7f3e9; overflow-x: hidden }'}</style>
        <title>Kailey Tam - Contact</title>
      </Helmet>
      <Navbar />
      <Row justify="center" align="middle" gutter={[64, 64]} style={{ paddingTop: '100px' }}>
        <Col lg={8} xs={24}>
          <Img fluid={props.data.headshot.childImageSharp.fluid} objectFit="cover" alt="headshot" />
        </Col>
        <Col lg={8} xs={24}>
          <Row justify="start" align="middle" gutter={[0, 48]}>
            <Col lg={16} xs={18}>
              <h2 style={{ fontFamily: 'Avenir Light', color: '#2c422f' }}>Hi friends,</h2>
            </Col>
            <Col lg={8} xs={5}>
              <KaileyAvatar />
            </Col>
            <Row justify="start">
              <Col lg={24} xs={24}>
                <p style={{ fontFamily: 'Avenir Light', color: '#000000' }}>
                  My name is Kailey and welcome to my blog. I write poetry and occasionally
                  copywrite for other people. On this blog, you’ll find line-by-line analyses of my
                  poems, the behind-the-scenes look at the making of on the way home, as well as the
                  sporadic journal entry. What began as a fun project in the midst of quarantine
                  season became a legitimate poetry chapbook, copyright and all. I’m so excited for
                  you to see not only my work, but the process behind it. Thank you for all your
                  support and enjoy!
                </p>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <LineBreak width="350px" colour="#e5decf" />
      <Row
        justify="center"
        style={{
          paddingBottom: '10px',
          paddingTop: '50px',
        }}
      >
        <Col>
          <h1 className="contact-form-header">Get In Touch</h1>
        </Col>
      </Row>
      <Row justify="center" style={{ paddingBottom: '20px' }}>
        <Col span={24}>
          <ContactForm />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default contact;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    headshot: file(relativePath: { eq: "contact-image.jpeg" }) {
      ...fluidImage
    }
  }
`;
