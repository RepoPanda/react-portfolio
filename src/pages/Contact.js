import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { validateEmail } from "../utils/helpers";



export default function Contact() {
    return (
      <>
        <div class="ccard-container">
          <div class="headers">
            <h2>Contact Me</h2>
          </div>

          <div class="form-group">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Name
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your name can be 0-30 characters long, 
                and must not contain any special characters.
              </Form.Text>
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                E-Mail
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Must be a valid email address.
              </Form.Text>
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Message</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
              <Form.Text id="passwordHelpBlock" muted>
                Please provide a message.
              </Form.Text>
            </InputGroup>
            <br />
            <Button as="input" type="submit" value="Submit" />{" "}
          </div>
        </div>
      </>
    );
}