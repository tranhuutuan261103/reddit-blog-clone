import React from "react";
import './CloseButton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CloseButton = () => {
    return <button className="close-button">
        <FontAwesomeIcon icon={faXmark} className="close-button__icon" />
        <span>Close</span>
    </button>;
}

export default CloseButton;