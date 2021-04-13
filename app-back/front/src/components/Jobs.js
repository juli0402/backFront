import React from 'react';
import Job from "./Job";

const JobsList = () => {

  let state = { 
  	"offers": [
  	{
  	  "name": "Asesor comercial de hipermercado",
  	  "company": "Schneider Electric", 
  	  "salary": "$4.5 a $5.5 millones",
  	  "city": "Bogotá, Colombia"
    }, 
    {
      "name": "Desarrollador de software",
      "company": "Google Inc.", 
      "salary": "$20 a 25 millones",
      "city": "Palo Alto, CA, USA"
      },
    ]
  };

  return (
    <div>
	  {state.offers.map( (e,i) => <Job key={i} offer={e}/>)}
    </div>
  )
}
export default JobsList;