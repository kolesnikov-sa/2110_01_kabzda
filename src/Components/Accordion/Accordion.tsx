import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

// Version 2 refactored
function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
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
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    );
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;