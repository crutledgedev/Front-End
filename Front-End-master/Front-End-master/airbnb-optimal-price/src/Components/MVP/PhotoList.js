import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList(){
 const[photo, setPhoto] = useState([])

 useEffect(() => {
     axios
     .get("https://api.nasa.gov/planetary/apod?api_key=TyBY2uhZ2HP5ZipYNT7ocoGT8Rbim191rgoHwcCx")
         .then(response => {
             const photo = response.data;
             setPhoto(photo);
         console.log(response.data)
     })
 },[]);

return (
    <div className="photo">
        <PhotoCard
        title={photo.title}
        picture={photo.url}
        date={photo.date}
        description={photo.explanation}
        credit={photo.copyright}

        
        />

    </div>
)
}