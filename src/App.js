import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country-information/Country';
import Nation from './components/Nation/Nation';

function App() {
  const [countries, setCountries] = useState([])

  const [nation, setNation] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res=> res.json())
      .then(data=>{ 
        setCountries(data);
        // const names = data.map(country => country.name);
      })
      .catch(error => console.log(error))  
  }, [])

  const handleAddCountry = (country) => {
    const newNation = [...nation, country];
    setNation(newNation);
  };

  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h4>Country added: {nation.length}</h4>
      <Nation nation={nation}></Nation>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
