import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ label, onClickHandler }) => {
return (
	<div className="container" >
	{label}{" "}
	<button className="toggle-button" onClick={onClickHandler}>
		<input type="checkbox" className="checkbox"
			name={label} id={label} />
		<label className="label" htmlFor={label}>
		<span className="inner " />
		<span className="button" />
		</label>
	</button>
	</div>
);
};

export default ToggleButton;
