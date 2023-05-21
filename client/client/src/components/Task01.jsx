import React, { useState } from 'react';
import axios from 'axios'

import './ass01.css'

function Task01() {
  const [inputs, setInputs] = useState(['Onboarding call', 'Google Search Console Access', 'Google Analytics Access', 'Website Access', 'Website Access','Technical Audit', 'Anchor Text and Semantic Analysis', 'Competitor Analysis', 'Anchor Text / URL Mapping', 'Google Data Studio Report + Local Reporting Suite','Site Level Optimization', 'On-Page Optimization', 'Content Creation', 'Content Publishing', 'Premium Press Release','Authority Niche Placements', 'Review Management', 'Index Links', 'Video Recap']);

  const handleEdit = (index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = prompt('Enter new value:');
    setInputs(updatedInputs);
  };

  const handlePost = (index) => {
    const value1 = inputs[index];
    
    axios.post('http://localhost:5000/post', {
  key1: `${value1}`,
})
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  };

  return (
    <div className="container">
      {inputs.map((value, index) => (
        <div className="row" key={index}>
          <div className="input-box">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                const updatedInputs = [...inputs];
                updatedInputs[index] = e.target.value;
                setInputs(updatedInputs);
              }}
            />
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handlePost(index)}>Post</button>
            <hr></hr>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Task01




 
 
 




 



 
 



 