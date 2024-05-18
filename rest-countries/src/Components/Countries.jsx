import React, { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.css";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    };
    fetchCountryData();
  }, []);
console.log(countries);
  return (
    <>
      {countries.map((country) => {
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
      })}
    </>
  );
};

export default Countries;

// import React, { useState, useEffect } from "react";
// import "flag-icons/css/flag-icons.css";

// const url = "https://restcountries.com/v3.1/all";
// const Countries = () => {
//   const [countries, setCountries] = useState([]);

//   const fetchCountryData = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setCountries(data);
//     console.log(data);
//   };
//   useEffect(() => {
//     fetchCountryData();
//   }, []);
//   return (
//     <>
//       {countries.map((country) => {
//         const { numericCode, name, population, region, capital, flag } =
//           country;
//         return (
//           <article key={numericCode}>
//             <div>
//               <img src={flag} alt={name} />
//               <h3>{name}</h3>
//               <h4>
//                 Population: <span>{population}</span>
//               </h4>
//               <h4>
//                 Region: <span>{region}</span>{" "}
//               </h4>
//               <h4>
//                 Capital: <span>{capital}</span>{" "}
//               </h4>
//             </div>
//           </article>
//         );
//       })}
//     </>
//   );
// };
// export default Countries;
