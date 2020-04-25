import React from "react"
import { Button, Form } from "react-bootstrap"

export default () => {
  return (
    <div className="pt-5">
      <h1>Leave a Reply</h1>
      <p>
        Your email address will not be published. Required fields are marked{" "}
        <span style={{ color: "red" }}>*</span>
      </p>
      <Form>
        <Form.Group controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="contactForm.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name..." />
        </Form.Group>
        <Form.Group controlId="contactForm.Mail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="contactForm.Website">
          <Form.Label>Website</Form.Label>
          <Form.Control type="website" />
        </Form.Group>
        <Form.Group controlId="contactForm.Submit">
          <Button>Post Comment</Button>
        </Form.Group>
      </Form>
    </div>
  )
}
