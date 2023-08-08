import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 navbar-sw-logo"><img src={"https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png"} width="100px" height="50px" alt="..."/></span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropstart">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
						
					<ul className="dropdown-menu">
						{ store.favorites.length >= 1 ? ( store.favorites.map(favItem => <li key={favItem._id}><span className="favs-character-name">{favItem.properties.name}</span><span onClick={()=>actions.addFavorite(favItem)} className="favs-x-button">X</span></li>)) : <div>No favorites yet!</div>}
						
					</ul>	
				</div>
				
			</div>
		</nav>
	);
};
