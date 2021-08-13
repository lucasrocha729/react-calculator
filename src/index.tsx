import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Calculator from "./Components/Calculator";

ReactDOM.render(
	<>
		<h1>Calculator</h1>
		<Calculator />
	</>,
	document.getElementById("root")
);

reportWebVitals();
