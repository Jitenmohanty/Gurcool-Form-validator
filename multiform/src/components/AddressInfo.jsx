import React, { useState, useEffect } from 'react';

const AddressInfo = ({ formData, setFormData, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({});

  //Form validator....
  const validate = () => {
    const newErrors = {};
    if (!formData.address1) newErrors.address1 = "Address Line 1 is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip || !/^\d{6}$/.test(formData.zip)) newErrors.zip = "Valid Zip Code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  //Set items on each button click we can definetly improve it by the help of debouncing...
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className='container'>
      <h2>Address Information</h2>
      <input
        type="text"
        placeholder="Address Line 1"
        value={formData.address1}
        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
      />
      {errors.address1 && <p>{errors.address1}</p>}
      <input
        type="text"
        placeholder="Address Line 2"
        value={formData.address2}
        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {errors.city && <p>{errors.city}</p>}
      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      />
      {errors.state && <p>{errors.state}</p>}
      <input
        type="text"
        placeholder="Zip Code"
        value={formData.zip}
        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
      />
      {errors.zip && <p>{errors.zip}</p>}
      <div className='btn'>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default AddressInfo;
