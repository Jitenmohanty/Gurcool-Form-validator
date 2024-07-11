import React, { useState, useEffect } from 'react';
import useDebounce from '../hook/useDebounce';

const PersonalInfo = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  const debouncedFormData = useDebounce(formData, 500); // 500ms delay


  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(debouncedFormData));
  }, [debouncedFormData]);

  return (
    <div className='container'>
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && <p>{errors.name}</p>}
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <p>{errors.email}</p>}
      <input
        type="text"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      {errors.phone && <p>{errors.phone}</p>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfo;
