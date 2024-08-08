import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Countries.css';

const Country = () => {
  const [countries, setCountries] = useState([]);
  // const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://xcountries-backend.azurewebsites.net/all');
      console.log(response.data,"countries api data");
      
      const countriesData = response.data;
      setCountries(countriesData);
    } catch (error) {
      console.error('Error fetching data: ', error);
      // setError(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  },[]);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <div>
      {countries.map(country => (
        <div key={country.name}>
          <img src={country.flag} alt={`${country.name} flag`}  />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export {Country};
