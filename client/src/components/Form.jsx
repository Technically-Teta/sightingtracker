import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = () => {

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




    //create functions that handle the event of the user typing into the form
    // const handleNickNameChange = (event) => {
    //     const nickname = event.target.value;
    //     setSightings((sightings) => ({ ...nickname, location , id  }));

    // };


    // const clearForm = () => {
    //     setSightings({ nickname: "", location: "" })
    // }

 

    return (

       <div>{sightings.length >0 ? 
              sightings.map((item)=> (<div> <p>{item.nickname}</p> <p>{item.location} </p> </div>)): " " }  </div>
        // <Form className='form-sightings' >
        //     <Form.Group>
        //         <Form.Label>Animal Nickname</Form.Label>
        //         <input
        //             type="text"
        //             id="add-user-name"
        //             placeholder="Animal Nickname"
        //             required
        //             value={sightings.nickname}
        //             onChange={handleNickNameChange}
        //         />
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>Location</Form.Label>
        //         <input
        //             type="text"
        //             id="add-user-lastname"
        //             placeholder="Location"
        //             required
        //             value={sightings.location}
        //             onChange={handleNickNameChange}
        //         />
        //     </Form.Group>
        //     <Form.Check
        //         type={'checkbox'}
        //         id={`isCurrent`}
        //         checked={sightings.is_current}
        //         onChange={handleNickNameChange}
        //         label={`Want to enter a new sighting?`}
        //     />
        //     <Form.Group>
        //     <Button type="submit" variant="outline-success">{sightings.id ? "Edit Sighting" : "Add Sighting"}</Button>
        //     {sightings.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
        //     </Form.Group>
        // </Form>
    );
};


export default MyForm



    // const handleLastnameChange = (event) => {
    //     const location = event.target.value;
    //     setStudent((student) => ({ ...student, lastname }));
    // };

    // const handleCheckChange = (event) => {
    //     const is_current = event.target.checked;
    //     //console.log(iscurrent);
    //     setStudent((student) => ({ ...student, is_current }));
    // };


       // //A function to handle the post request
    // const postStudent = (newStudent) => {
    //     return fetch("http://localhost:8080/api/students", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newStudent),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             //console.log("From the post ", data);
    //             //I'm sending data to the List of Students (the parent) for updating the list
    //             onSaveStudent(data);
    //             //this line just for cleaning the form
    //             clearForm();
    //         });
    // };

    // //A function to handle the post request
    // const putStudent = (toEditStudent) => {
    //     return fetch(`http://localhost:8080/api/students/${toEditStudent.id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(toEditStudent),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             onUpdateStudent(data);
    //             //this line just for cleaning the form
    //             clearForm();
    //         });
    // };


   