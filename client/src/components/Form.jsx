import React, { useRef } from "react";

const MyForm = (props) => {
// use ref initialization --- species 
const specCommonName = useRef();
const specSciName = useRef();
const specInWild = useRef();
const specConStatus = useRef();

// use ref initialization --- Individuals   
const indivNickName = useRef();
const indivSpecies = useRef();



// use ref initialization --- Sightings




//new function called handleSubmit that takes an event object as a parameter.
 


/*
new object called allUserInfo that contains the values
 of all of the form fields. The current?.value syntax is used to access the value of the form field, but only if the field is not null or undefined.
*/
    return (

       <div>{sightings.length >0 ? 
              sightings.map((item)=> (<div> <p>{item.nickname}</p> <p>{item.location} </p> </div>)): " " }  </div>
       
    );
};


export default MyForm


 