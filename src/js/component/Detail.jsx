import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Detail = () => {
    const store = useContext(Context);
    const character = store;
    const params = useParams();
    console.log(params)
// crear un estado para guardar el detalle
// funcion para hacer le find para buscar el detalle
// se guarda en el useState
    return (
        <>
            <div className="container-fluid details-main-div">
                <div className="details-container">
                    <div className="col-5 details-img-container">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="rounded float-start" alt="..." />
                        <p>Image Here</p>
                    </div>
                    <div className="col-5 details-h1-p-container">
                        <div className="details-text">
                            <h1>Name Here{character.properties?.name}</h1>
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
                        <p>Luke Skywalker</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Gender</p>
                        <p>Luke Skywalker</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Height</p>
                        <p>Luke Skywalker</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Skin Color</p>
                        <p>Luke Skywalker</p>
                    </div>
                    <div className="col-2 details-info-bites-container">
                        <p className="details-info-bites-title">Eye Color</p>
                        <p>Luke Skywalker</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;