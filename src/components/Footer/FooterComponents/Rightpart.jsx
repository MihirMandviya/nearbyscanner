import React from 'react';

const popularPlaces=[{
    name:"Singapore",
    link:"#"
},{
    name:"Bengaluru",
    link:"#"
},{
    name:"Chennai",
    link:"#"
},{
    name:"Mumbai",
    link:"#"
},{
    name:"Pune",
    link:"#"
},{
    name:"Delhi",
    link:"#"
},

];

function PopularPlaces(props){
    return(
        <div>
        <p><a href={props.link}>{props.name}</a></p>
        </div>
    );
}

function Rightpart() {
  return (
    <div className="footer-container-right flex flex-row basis-full md:basis-3/4 items-center mt-8 md:mt-0">
        <div className="informative-pages flex flex-col items-center w-full mb-4">
            <a href="#" className="mb-2 text-center w-full">Privacy Policy</a>
            <a href="#" className="mb-2 text-center w-full">Terms and Conditions</a>
            <a href="#" className="mb-2 text-center w-full">About Us</a>
            <a href="#" className="mb-2 text-center w-full">Contact Us</a>
        </div>

        <div className="Popular-Place w-full p-4 md:p-10 rounded">
            <p className=" mb-4">Popular Places</p>
            <div className="flex flex-col md:flex-col md:justify-around mt-5 space-y-4 md:space-y-0">
                {popularPlaces.map((places, index) => (
                    <PopularPlaces
                        key={index} 
                        name={places.name}
                        link={places.link}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Rightpart;