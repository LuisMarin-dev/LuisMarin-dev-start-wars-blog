import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const DetailPeople = () => {
    const {store} = useContext(Context);
    const {people} = store;
    const params = useParams();

const [character, setCharacter] = useState({});

const getDetail = () => {
    const detail = people.find((detail) => detail._id == params.id)
    setCharacter(detail);
};

useEffect(()=>{
    getDetail()
},[people]);
console.log(character)
return (
        <>
            <div className="container-fluid details-main-div">
                <div className="details-container">
                    <div className="details-img-container">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="rounded float-start" alt="..." />
                    </div>
                    <div className="col-5 details-h1-p-container">
                        <div className="details-text">
                            <h1>{character.properties?.name}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis sed molestiae fugiat cumque quidem ducimus eos labore, dolores aspernatur delectus omnis in asperiores eius explicabo beatae fuga ut obcaecati maxime alias id illo quo aliquam cum mollitia? Dolore, tenetur facere. Doloribus deleniti tempore saepe quaerat laudantium maxime quos nihil omnis laboriosam cum esse, aut fugiat debitis, placeat inventore dolore voluptates hic odio incidunt explicabo molestiae tenetur. Accusantium beatae eaque quidem, ut dicta similique rerum distinctio ab dolorem, numquam, esse qui atque fuga sapiente? Natus, nobis!</p>
                        </div>
                    </div>  
                </div>
                <div className="col-11 details-info-container">
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Name</p>
                        <p>{character.properties?.name}</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Birth Year</p>
                        <p>{character.properties?.birth_year}</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Gender</p>
                        <p>{character.properties?.gender.charAt(0).toUpperCase()+character.properties?.gender.slice(1)}</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Height</p>
                        <p>{character.properties?.height + " cm"}</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Skin Color</p>
                        <p>{character.properties?.skin_color.charAt(0).toUpperCase()+character.properties?.skin_color.slice(1)}</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Eye Color</p>
                        <p>{character.properties?.eye_color.charAt(0).toUpperCase()+character.properties?.eye_color.slice(1)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPeople;