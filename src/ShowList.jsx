// ShowList.js
import "./App.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);
    
const handlecall = async () => {
    try {
      const result = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await result.json();
      console.log(data);   
      if(data){
        setShows(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(()=>{   
    handlecall()

  },[])

  return (
    <div>
      <h1 className='h1'>TV Shows</h1>
      <ul className='ul'>
        {shows.map(show => (
          <li key={show.show.id} className='li'>
            <Link to={`/show/${show.show.id}`} className='link'>
              {show.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
