import React, {useState} from "react";

const PreferenceButton = ({image, text = "Smth"}) => {

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
    setIsActive(current => !current);
    };

    return(
    <div class = "flex-col">
        <div style={{ background: isActive ? '#E1AD01' : '' }} onClick={handleClick}>
            <button class = "p-2"> <img src = {image} class = "hover:drop-shadow-xl"/></button>
        </div>
        <body>{text}</body>
    </div>
    );
};
export default PreferenceButton;