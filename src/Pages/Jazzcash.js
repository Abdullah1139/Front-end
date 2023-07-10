import React, { useState } from 'react';
import { jazzcash } from '../Service/Api';
const Jazzcash = () => {
  const [jcDetails, setJcDetails] = useState({
    mobileNo: '',
    pin: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    jazzcash(jcDetails).then((res) => {
      alert(res.data.pp_ResponseMessage);
    });

    setJcDetails({
      mobileNo: '',
      pin: '',
    });
  };

  return (
    <div className='flex justify-center mt-20 mb-20'>
      <div className='card'>
        <h2 className='text-center'>Jazzcash Payment</h2>
        <form className='mt-8 mb-2' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='mobileNo'>Jazzcash Mobile No</label>
            <input
              id='mobileNo'
              type='text'
              value={jcDetails.mobileNo}
              onChange={(e) =>
                setJcDetails({ ...jcDetails, mobileNo: e.target.value })
              }
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='pin'>PIN For Transaction</label>
            <input
              id='pin'
              type='password'
              value={jcDetails.pin}
              onChange={(e) =>
                setJcDetails({ ...jcDetails, pin: e.target.value })
              }
              required
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Jazzcash;
