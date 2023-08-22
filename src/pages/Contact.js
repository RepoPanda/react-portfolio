import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { validateEmail } from "../utils/helpers";



export default function Contact() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

    

    return (
      <>
        <div class="ccard-container">
          <div class="headers">
            <h2>Contact Me</h2>
          </div>

          <form class="form-group" id="contact-form" onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Name
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                E-Mail
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroup.Text>Message</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
              />
            </InputGroup>
            <br />
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <br />
            <Button as="input" type="submit" value="Submit" />{" "}
          </form>
        </div>
      </>
    );
}