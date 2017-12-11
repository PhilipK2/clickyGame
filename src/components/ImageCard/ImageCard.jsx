import React from "react";
import "./ImageCard.css";

const ImageCard = props => (

    <div onClick={() => props.Clicked(props.id)} className = "card">
        <div className = "img-container">
            <img className = "responsive-img" src = {props.image}/>
        </div>
    </div>

);



export default ImageCard;

