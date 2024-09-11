import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './Signup.css';

function Signup() {
  const [registerInput, setRegisterInput] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterInput({ ...registerInput, [name]: value });
  };

  // Validation logic
  const validateForm = () => {
    if (!registerInput.fname || !registerInput.lname) {
      setErrorMessage('First Name and Last Name are required.');
      return false;
    }
    if (!registerInput.email.includes('@')) {
      setErrorMessage('Please enter a valid email.');
      return false;
    }
    if (registerInput.password !== registerInput.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Clear previous messages
    setErrorMessage('');
    setSuccessMessage('');

    // Validate form inputs
    if (!validateForm()) {
      return;
    }

    // Prepare the form data
    const formData = {
      fname: registerInput.fname,
      lname: registerInput.lname,
      email: registerInput.email,
      password: registerInput.password
    };

    try {
      // Make an HTTP POST request to your API using axios
      const response = await axios.post('https://your-api-endpoint.com/signup', formData);

      // Handle successful response
      if (response.status === 200) {
        setSuccessMessage('Form submitted successfully!');
        console.log('Server response:', response.data);
      } else {
        setErrorMessage('Failed to submit form. Please try again.');
      }
    } catch (error) {
      // Handle error during submission
      setErrorMessage('An error occurred during form submission.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='signup'>
      <div className='card-body'>
        <div className='card-header'>
          <h1>SignUp</h1>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                onChange={handleInput}
                value={registerInput.fname}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                onChange={handleInput}
                value={registerInput.lname}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={registerInput.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={registerInput.password}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleInput}
                value={registerInput.confirmPassword}
              />
            </div>

            {errorMessage && <p className='error'>{errorMessage}</p>}
            {successMessage && <p className='success'>{successMessage}</p>}

            <div className="form-group">
              <button type='submit' className='sub_btn'>SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
