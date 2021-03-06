import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string;
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    );
}

type UncontrolledAccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    );
}

function UncontrolledAccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;