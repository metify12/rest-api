import React, { useState, useEffect } from "react";
import axios from "axios";
import './Countries.css';
import LoadingState from "../../utils/loader/LoadingState";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false)

  //   useEffect(() => {
  //     // const fetchCountryData = async () => {
  //     //   const response = await fetch(url);
  //     //   const data = await response.json();
  //     //   setCountries(data);
  //     // };
  //     // fetchCountryData();

  // }, []);

  //  data can be fetched like this below

  // const fetchData = async ()=>{
  //     const response = await axios.get(`${url}`)
  //     console.log(response);
  // }

  //   or like this

  const fetchData = async () => {

    // destructuring
    const { data } = await axios.get(`${url}`);
    console.log(data);
    setCountries(data);
    setLoading(false)
  };
  useEffect(() => {
    setLoading(true)
   setTimeout(()=>{
    fetchData();
   }, 3000)
  }, []);

  return (
    <>
    {loading && <LoadingState/>}
      <div className="country">
        {countries &&
          countries.map((country) => (
            <div className="country-card bg-elements" key={country.ccn3}>
              <div className="flag-container">
                <img src={country.flags.png} alt="" />
              </div>
              <div className="details">
                <h1>{country.name.common}</h1>
                <p>{country.population}</p>
                <p>{country.region}</p>
                <p>{country.capital}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Countries;

/* {countries.map((country) => {
        const { numericCode, name, population, region, capital, flags } =
          country;
        return (
          <article key={numericCode}>
            <div>
              <img src={flags.png} alt={name.common} />
              <h3>{name.common}</h3>
              <h4>
                Population: <span>{population}</span>
              </h4>
              <h4>
                Region: <span>{region}</span>{" "}
              </h4>
              <h4>
                Capital: <span>{capital && capital[0]}</span>{" "}
              </h4>
            </div>
          </article>
        );
      })} */
