import React, { useState, useEffect } from 'react'


const MyGet = () => {

    // This is the original State with not initial student 
    const [sightings, setSightings] = useState([])


    const getSighting = () => {
      fetch("http://localhost:2023/api/sightings")
      .then((response) => response.json())
      .then(sightings => {
        setSightings(sightings); 
        console.log('Sighting fetched...', sightings);
        });
    }

    useEffect(() => {getSighting()}, []);




    return (

       <div>{sightings.length >0 ? 
              sightings.map((item)=> (<div> <p>{item.nickname}</p> <p>{item.location} </p> </div>)): " " }  </div>
       
    );
};


export default MyGet


 