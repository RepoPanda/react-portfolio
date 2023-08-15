import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import helpers from "../utils/helpers";



export default function Contact() {
    return (
      <>
        <div class="ccard-container">
          <div class="headers">
            <h2>Contact Me</h2>
          </div>

          <div class="form-group">
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Default
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </div>
        </div>
      </>
    );
}