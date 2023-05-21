import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ass03.css';

function Task02() {
  const [ID, setId] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/fetch')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  },[]);

  const postMessage = () => {
    axios.post('http://localhost:8080/insert', { Id: ID, Title: message })
      .then(response => {
        console.log('Post response:', response.data);
        setResponseMessage(response.data.message);
      })
      .catch(error => {
        console.error('Post error:', error);
      });
  };

  const deleteMessage = (itemId) => {
    axios.delete(`http://localhost:8080/delete/${itemId}`)
      .then(response => {
        console.log('Delete response:', response.data);
        setData(prevData => prevData.filter(item => item.Id !== itemId));
      })
      .catch(error => {
        console.error('Delete error:', error);
      });
  };

  return (
    <div className="App03">
      <h1>Post and Delete Example</h1>

      <div>
        <label htmlFor="Id">Id:</label>
        <input
          type="text"
          id="Id"
          name="Id"
          value={ID}
          onChange={e => setId(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={postMessage}>Submit</button>
      </div>

      <div>
        {data.map(item => (
          <div key={item.ID}>
            {item.Title}
            {item.ID}
            <button onClick={() => deleteMessage(item.ID)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task02;
