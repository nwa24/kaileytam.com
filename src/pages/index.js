import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'antd';
import Img from 'gatsby-image/withIEPolyfill';

import ImageCarousel from 'components/image-carousel';
import LineBreak from 'components/line-break';
import Footer from 'components/footer';
import Header from 'components/header';
import './index-page.css';

const IndexPage = ({ data }) => {
  return (
    <div>
      <Header />
      <Row
        gutter={[16, 100]}
        justify="center"
        style={{
          paddingTop: '100px',
          marginBottom: '0px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Col>
          <ImageCarousel />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <LineBreak width="350px" colour="#e5decf" />
        </Col>
      </Row>
      <Row gutter={[16, 100]} justify="center" align="middle" style={{ paddingTop: '50px' }}>
        <Col lg={8} xs={24}>
          <Img fixed={data.comingSoon.childImageSharp.fixed} objectFit="cover" alt="coming-soon" />
        </Col>
        <Col lg={8} xs={24}>
          <h1
            style={{
              fontFamily: 'Montserrat Semibold',
              textTransform: 'uppercase',
              letterSpacing: '5px',
              paddingBottom: '40px',
            }}
          >
            On The Way Home
          </h1>
          <p
            style={{
              fontFamily: 'Avenir Light',
              fontSize: '16px',
              color: '#000000',
            }}
          >
            ON THE WAY HOME is a handful of poems written over the course of five years about
            growing up. The narrative begins with baby steps away from home, escalates with the
            conflict of taking a wrong turn, accepts the need for a tune-up, and resolves with an
            elusive, unfinished ending. Even though this book has a start and an end, the narrative
            of growing up extends beyond these pages. This anthology represents a young,
            ever-evolving voice among billions, a voice that is still learning that the fight for
            significance is not a competition, but a demonstration of listening, rapport, and
            compassion.
          </p>
          <a href="https://www.kaileytam.com/contact" className="link-to-contact-page">
            <p
              style={{
                fontFamily: 'Avenir Light',
                fontSize: '16px',
                color: '#ca5743',
              }}
            >
              Get in contact now to order a book!
            </p>
          </a>
        </Col>
      </Row>
      <Footer style={{ paddingTop: '60px' }} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    comingSoon: file(relativePath: { eq: "open-book.jpg" }) {
      childImageSharp {
        fixed(quality: 100, width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
