import React from 'react';

const Confirmation = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className='container '>
      <h2>Confirmation</h2>
     <div className="border">
     <h4>Name: {formData.name}</h4>
      <h4>Email: {formData.email}</h4>
      <h4>Phone: {formData.phone}</h4>
      <h4>Address Line 1: {formData.address1}</h4>
      <h4>Address Line 2: {formData.address2}</h4>
      <h4>City: {formData.city}</h4>
      <h4>State: {formData.state}</h4>
      <h4>Zip Code: {formData.zip}</h4>
      </div>
      <div className="btn">
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
     </div>
    </div>
  );
};

export default Confirmation;
