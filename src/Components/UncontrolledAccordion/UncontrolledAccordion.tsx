import React, { useState } from "react";
import {AccordionBody, AccordionTitle } from "../Accordion/Accordion";

type UncontrolledAccordionPropsType = {
    title: string;
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => {collapsed ? setCollapsed(false) : setCollapsed(true)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

export default UncontrolledAccordion;