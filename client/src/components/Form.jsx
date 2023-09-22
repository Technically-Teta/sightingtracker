import React, { useRef } from "react";

const MyForm = (props) => {
// use ref initialization --- species 
const specCommonName = useRef();
const specSciName = useRef();
const specInWild = useRef();
const specConStatus = useRef();

// use ref initialization --- Individuals   
const indivNickName = useRef();
const indivSpecies = useRef(); //const specSciName = useRef();

// use ref initialization --- Sightings
const sightTime = useRef();
const sightIndividual= useRef();
const sightLocation = useRef();
const sightHealth = useRef();
const userEmail = useRef();


//new function called handleSubmit that takes an event object as a parameter.
 const handleSubmit = (event) => {
event.preventDefault();
/*
new object called allUserInfo that contains the values
 of all of the form fields. The current?.value syntax is used to access the value of the form field, but only if the field is not null or undefined.
*/
const allAppInfo ={
  speciesCommonName:specCommonName.current?.value,
  speciesScientificName:specSciName.current?.value,
  speciesInTheWild:specInWild?.value,
  speciesConservationStatus:specConStatus.current?.value,
  sightingTime:sightTime.current?.value,
  sightingIndividual:sightIndividual.current?.value,
  sightLocation:sightLocation.current?.value,
  sightHealth:sightHealth.current?.value,
  userEmail:userEmail.current?.value,
  individualNickname:indivNickName.current?.value,
  individualSpecies:indivSpecies.current?.value,
};
// onSubmit() function that was passed to the handleSubmit function as a prop. The allUserInfo object is passed to the onSubmit()
props.onSubmit(allAppInfo)
 };


//line of code is used to specify the function that should be called when the form is submitted.
    return (




      <form onSubmit={handleSubmit}>
      <h3>Enter Species Info Here:</h3>
      <input type="text" placeholder="Common Name" ref={specCommonName} />
      <input type="text" required placeholder="Scientific Name" ref={specSciName } />
      <input type="text" placeholder="Number Living in Wild" ref={specInWild} />
      <input type="text" placeholder="Conservation Status Code" ref={specConStatus} />
        <br />
        <br />
      <h3>Enter Individual Animals Info Here:</h3>
      <input type="text" placeholder="Animal Nickname" ref={indivNickName} />
      <input type="text" placeholder="What is the Animals Species?" ref={indivSpecies} />
      <br />
      <br />
      <h3>Enter Sighting Info Here:</h3>
      <input type="text" placeholder="Enter the time & Date" ref={sightTime} />
      <input type="text" placeholder="Who is being spotted?" ref={sightLocation} />
      <input type="text" placeholder="Location" ref={sightLocation} />
      <input type="text" placeholder="Are they healthy?" ref={sightHealth} />
      <input type="text" placeholder="Scientist Email?" ref={userEmail} />
      <button  type="submit">Submit All</button>






     </form>
    );
};


export default MyForm


 