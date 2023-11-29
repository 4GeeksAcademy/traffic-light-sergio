import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	let[redOn,setRedOn] = useState("off");
	let[yellowOn,setYellowOn] = useState("off");
	let[greenOn,setGreenOn] = useState("off");
	let[blueOn,setBlueOn] = useState("off");
	let[showBlue,setBlueLight] = useState("hidden");

	function setLight(color) {
		if(color === "red") {
			if (yellowOn === "on" || greenOn === "on" || blueOn === "on") {
				setYellowOn("off");
				setGreenOn("off");
				setBlueOn("off");
			}
			setRedOn("on");
		}
		if(color === "yellow") {
			if (redOn === "on" || greenOn === "on" || blueOn === "on") {
				setRedOn("off");
				setGreenOn("off");
				setBlueOn("off");
			}
			setYellowOn("on");
		}
		if(color === "green") {
			if (redOn === "on" || yellowOn === "on" || blueOn === "on") {
				setRedOn("off");
				setYellowOn("off");
				setBlueOn("off");
			}
			setGreenOn("on");
		}
		if(color === "blue") {
			if (redOn === "on" || yellowOn === "on" || greenOn === "on") {
				setRedOn("off");
				setYellowOn("off");
				setGreenOn("off");
			}
			setBlueOn("on");
		}
	}

	function showBlueLight() {
		setBlueLight("flex");
	}
	

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="trafficPost"></div>
			<div className="rounded-3 bg-dark p-3">
				<div className={"bg-danger light " + redOn + " m-1"} onClick={() => setLight('red')}></div>
				<div className={"bg-warning light " + yellowOn + " m-1"} onClick={() => setLight('yellow')}></div>
				<div className={"bg-success light " + greenOn + " m-1"} onClick={() => setLight('green')}></div>
				<div className={"bg-primary light " + blueOn + " " + showBlue + " m-1"} onClick={() => setLight('blue')}></div>
			</div>
			<button type="button" className="btn btn-light m-5" onClick={showBlueLight}>Mostrar luz azul</button>
		</div>
	);
};

export default Home;
