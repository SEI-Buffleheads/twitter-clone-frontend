// import ProfilePage from './Components/Profile/ProfilePage';
// import { Routes, Route } from 'react-router-dom';
import React from "react";
import Sidebar from "../../Sidebar";
import Feed from "./Feed";
import Widget from "../Widgets/Widget";
import "./Home.css";

function Home() {
	// useEffect(() => {
	//   const callApi = async () => {
	//     const response = await getArtists();
	//     setArtists(response);
	//     const res = await getAlbums();
	//     setAlbums(res);
	//   };
	//   callApi();
	// }, [toggleApiCall]);

	return (
		// BEM
		<div className="home">
			<Sidebar />
			<Feed />
			<Widget />
		</div>
	);
}

export default Home;