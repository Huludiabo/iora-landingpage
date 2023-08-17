// src/components/Contact/index.js
import Image from 'next/image';
import { useState } from 'react';
import { StyledSectionContact } from '@/styles/sections';
import { StyledContact, StyledInput, StyledTextArea, StyledButton } from './styles';

export default function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '', foundUs: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Valid email is required.";
    if (!formData.message.trim()) validationErrors.message = "Message is required.";

    setErrors(validationErrors);

    // Return true if there are no errors
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send the email');
        }
      } catch (error) {
        console.error('There was an error sending the email', error);
      }
    }
  };

  return (
    <StyledSectionContact backgroundColor="#251525" fullHeight id="contact">
      <StyledContact>
        <h1>Let&apos;s Build the Future <span>Together</span></h1>
        <h3>Get in touch with us to discuss your project and explore how we can help you succeed in the world of blockchain.</h3>
        <form onSubmit={handleSubmit}>
          <StyledInput name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          <StyledInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          <StyledInput name="foundUs" value={formData.foundUs} onChange={handleChange} placeholder="Where did you find us?" />
          <StyledTextArea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></StyledTextArea>
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </StyledContact>
    </StyledSectionContact>
  );
}
