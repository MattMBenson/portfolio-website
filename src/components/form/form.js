import React, { useState } from 'react';
import nodemailer from 'nodemailer';

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email using Nodemailer here
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="emailInput"
        type="email"
        placeholder="Your email."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="submitInput" type="submit">
        Go
      </button>
    </form>
  )
}

export default EmailForm;