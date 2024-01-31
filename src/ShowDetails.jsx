

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import "./App.css"

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowDetails(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='h1'>{showDetails.name}</h1>
      <img src={showDetails.image.original} alt={showDetails.name}  className='img'/>
      <p className='p'>{showDetails.summary}</p>
    </div>
  );
}

export default ShowDetails;
