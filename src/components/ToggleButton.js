import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ label }) => {
return (
	<div className="container">
	{label}{" "}
	<div className="toggle-button">
		<input type="checkbox" className="checkbox"
			name={label} id={label} />
		<label className="label" htmlFor={label}>
		<span className="inner " />
		<span className="button" />
		</label>
	</div>
	</div>
);
};

export default ToggleButton;
