import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: (value: boolean) => void;
}

// Version 2 refactored
function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

// Version 1
// function Accordion(props: AccordionPropsType) {
//     if (!props.collapsed) {
//         return (
//             <div>
//                 <AccordionTitle title={props.title}/>
//                 <AccordionBody/>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.title}/>
//             </div>
//         );
//     }
// }

type AccordionTitlePropsType = {
    title: string;
    onClick: (value: boolean) => void;
    collapsed: boolean;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onClick(!props.collapsed)}}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;