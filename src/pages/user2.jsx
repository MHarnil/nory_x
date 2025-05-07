import React, { useState } from 'react';
import Box from '@mui/material/Box';

function User2() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    state: '',
    country: '',
    city: '',
    address: '',
    code: '',
    company: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};

    // ✅ User2 fields required
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        tempErrors[key] = `${capitalize(key)} is required.`;
      }
    });

    // ✅ Additional format validations
    if (formData.fullname && formData.fullname.trim().length < 3) {
      tempErrors.fullname = 'Full name must be at least 3 characters.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address.';
    }

    if (formData.phonenumber && !/^[0-9\-+\s()x]+$/.test(formData.phonenumber)) {
      tempErrors.phonenumber = 'Enter a valid phone number.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      alert('Form submitted successfully!');
    } else {
      alert('Please correct the highlighted errors.');
    }
  };

  return (
    <Box
      style={{
        backgroundColor: '#f4f6f8',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          width: '500px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '30px', color: '#333' }}>Upload Data</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {renderInput('fullname', 'Full Name')}
          {renderInput('email', 'Email', 'email')}
          {renderInput('phonenumber', 'Phone Number')}
          {renderInput('state', 'State')}
          {renderInput('country', 'Country')}
          {renderInput('city', 'City')}
          {renderInput('address', 'Address')}
          {renderInput('code', 'Code')}
          {renderInput('company', 'Company')}
          {renderInput('role', 'Role')}

          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '12px',
              backgroundColor: '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#155fa0')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#1976d2')}
          >
            Submit
          </button>
        </form>
      </Box>
    </Box>
  );

  function renderInput(name, placeholder, type = 'text') {
    const hasError = errors[name];
    return (
      <div style={{ width: '100%', textAlign: 'left' }}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          style={{
            ...inputStyle,
            borderColor: hasError ? 'red' : '#ccc',
          }}
        />
        {hasError && (
          <div style={{ color: 'red', fontSize: '13px', marginTop: '5px' }}>{errors[name]}</div>
        )}
      </div>
    );
  }
}

const inputStyle = {
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
};

export default User2;
