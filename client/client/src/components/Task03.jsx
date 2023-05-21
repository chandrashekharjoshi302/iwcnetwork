import React, { useState } from 'react';
import axios from 'axios';
import './ass03.css'

function Task03() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [responseData, setResponseData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://chimpu.xyz/api/post.php', {
        phoneNumber
      });

      const data = response.headers;
      setResponseData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='App03'>
      <h1>Post Data to API Endpoint</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Response Data:</h2>
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Task03
