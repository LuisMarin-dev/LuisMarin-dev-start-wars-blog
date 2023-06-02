import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";


export const Home = () => {
	const {store, actions} = useContext(Context);

	return(
		<div className="text-center mt-5">
			<div className="people-carousel d-flex" >
				{store.people.map((character) => {
					return(
						<div className="card" style={{minWidth: "18rem"}}>
						<img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{character.properties.name}</h5>
							<p className="card-text">Gender: {character.properties.gender}</p>
							<p className="card-text">Hair-color: {character.properties.hair_color}</p>
							<p className="card-text">Eye-color: {character.properties.eye_color}</p>
							<a href="#" className="btn btn-outline-primary ">Learn more!</a>
							<a href="#" className="btn btn-outline-warning "><i class="far fa-heart"></i></a>
						</div>
						</div>
					)
				})}
			</div>
			<div className="planet-carousel d-flex">
				{store.planets.map((planet) => {
					return(
						<div className="card" style={{minWidth: "18rem"}}>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{planet.properties.name}</h5>
							<p className="card-title">Population: {planet.properties.population}</p>
							<p className="card-text">Terrain: {planet.properties.terrain}</p>
							<a href="#" className="btn btn-outline-primary">Learn more!</a>
							<a href="#" className="btn btn-outline-warning "><i class="far fa-heart"></i></a>
						</div>
						</div>
					)
				})}
			</div>
		</div>)
};
