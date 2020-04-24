import React from "react"
import { Button, Form } from "react-bootstrap"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout column="col-10">
      <div className="pt-5">
        <h1>Contact Us</h1>
        <Form>
          <Form.Group controlId="contactForm.Name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="name" placeholder="Name..." />
          </Form.Group>
          <Form.Group controlId="contactForm.Mail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="contactForm.Message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="contactForm.Submit">
            <Button>Submit</Button>
          </Form.Group>
        </Form>
      </div>
    </Layout>
  )
}
