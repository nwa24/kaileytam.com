import React from "react"
import { Form, FormGroup, Col, Button } from "react-bootstrap"
import { Row, Col as Col1 } from "antd"
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <>
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        {/* This is done to filter for spam submissions */}
        <p hidden>
          <label>
            Don't fill this out:
            <input name="bot-field" />
          </label>
        </p>
        <Row justify="center">
          <Col1 span={12}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGroupName">
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </Form.Group>
            </Form.Row>
          </Col1>
        </Row>
        <Row justify="center">
          <Col1 span={12}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGroupEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </Form.Group>
            </Form.Row>
          </Col1>
        </Row>
        <Row justify="center">
          <Col1 span={12}>
            <Form.Row>
              <FormGroup as={Col} controlId="formGroupComments">
                <Form.Control
                  required
                  as="textarea"
                  rows="3"
                  placeholder="Comments..."
                  name="comments"
                />
              </FormGroup>
            </Form.Row>
          </Col1>
        </Row>
        <Row justify="center">
          <Col1 span={12}>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Col1>
        </Row>
      </Form>
    </>
  )
}

export default ContactForm
