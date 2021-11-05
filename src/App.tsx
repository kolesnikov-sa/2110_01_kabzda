import React, { useState } from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import OnOff from './Components/OnOff/OnOff';
import Rating, { RatingValueType } from './Components/Rating/Rating';
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [onOffState, setOnOffState] = useState<boolean>(false);

    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title="Menu" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <UncontrolledRating />
            <OnOff state={onOffState} onClick={setOnOffState} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
