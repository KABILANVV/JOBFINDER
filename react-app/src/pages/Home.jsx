import React, { useState } from 'react';
import img1 from "../assets/apple.png";
import img2 from "../assets/micro.png";
import img3 from "../assets/google.png";
import img4 from "../assets/acc.png";
import img5 from "../assets/x.png";
import img6 from "../assets/tcs.png";
import img7 from "../assets/yt.png";
import img8 from "../assets/capgemini.png";
import img9 from "../assets/meta.png";
import img10 from "../assets/oculus.png";
import '../Css/home.css';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';
import UseTypingEffect from '../Components/Typing';
function Home() {
  const [apply,SetApply]=useState(false);
  const text = UseTypingEffect('Hello! Do You want to Apply for a Role', 200);
  const venues = [
    {
      image: img1,
      name: "Apple",
      post: "Customer Support Executive",
      experience: "5+ years",
      location:"Mumbai,Maharastra",
      type:"On-Site",
    },
    {
      image: img2,
      name: "Microsoft inc.",
      post: "Business Development Executive",
      experience: "4+ years",
      location:"Chennai,Tamil Nadu",
      type:"On-Site",
    },
    {
      image: img3,
      name: "Google",
      post: "Associate Manager",
      experience: "5+ years",
      location:"Coimbatore,Tamil Nadu",
      type:"Remote",
    },
    {
      image: img4,
      name: "Accenture",
      post: "Systrack SME",
      experience: "2+ years",
      location:"Chennai,Tamil Nadu",
      type:"On-Site",
    },
    {
      image: img5,
      name: "X",
      post: "Buisness Consultant",
      experience: "10+ years",
      location:"Bangalore,Karnataka",
      type:"Remote",
    },
    {
      image: img6,
      name: "TCS",
      post: "Service Cloud Developer",
      experience: "6+ years",
      location:"Hyderabad,,Andhra Pradesh",
      type:"Online",
    },
    {
      image: img7,
      name: "Youtube",
      post: "Associate Web Developer",
      experience: "NIL",
      location:"Jaipur,Rajasthan",
      type:"Off-Site",
    },
    {
      image: img8,
      name: "Capgemini",
      post: "Java Full Stack Developer",
      experience: "NIL",
      location:"Pune,Maharastra",
      type:"Remote",
    },
    {
      image: img9,
      name: "Meta",
      post: "Software Engineer",
      experience: "3+ years",
      location:"Bengalore,,Karnataka",
      type:"remote",
    },
    {
      image: img10,
      name: "Oculus",
      post: "Software Deveopment Engineer",
      experience: "10+ years",
      location:"Vizag,Telengana",
      type:"On-Site",
    },
  ];
if(apply){
  return (
    <div>
    <div className="viewvenue">
      {venues.map((venue, index) => (
        <div key={index} className='view-container'>
          <img src={venue.image} alt={venue.name} />
          <div className='desc'>
          <h1 className='des-tit'>{venue.name}</h1>
            <p>{venue.post}</p>
            <p>Experience : {venue.experience=="NIL"? "": <WorkIcon/>} {venue.experience}<br/> Location : <WhereToVoteOutlinedIcon style={{fontSize:"15px"}}/> {venue.location} <br/><ApartmentTwoToneIcon  /> {venue.type} </p> 
            <br/>
            <Button variant="contained" color="primary" >
            Apply
            <ArrowForwardIcon/>
          </Button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
  return(
    <div>
    <div className='main' >{text}{text.length<=37?"":<div style={{paddingLeft:"700px"}}><Button onClick={()=>SetApply(true)} style={{fontFamily:'Gowun Batang',fontSize:"30px",backgroundColor:"rgb(255, 255, 255)" ,color:"black", }} variant="contained" color="primary">Apply Now<ArrowForwardIcon/></Button></div>}</div>
    </div>
  );
}

export default Home;