import {useState} from "react";

type OnOffType = {
    state: boolean;
    onClick: (value: boolean) => void;
}

function OnOff(props: OnOffType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: props.state ? "green" : "white"
    };
    const offStyle = {
        marginLeft: "2px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: props.state ? "white" : "red"
    };
    const indicatorStyle = {
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.state ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onClick(!props.state)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onClick(!props.state)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff;