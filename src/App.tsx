import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import OnOff from './Components/OnOff/OnOff';
import Rating from './Components/Rating/Rating';
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            {/*<PageTitle title="This is APP component"/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion title="Menu" collapsed={true}/>*/}
            {/*<Accordion title="Users" collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
            <UncontrolledAccordion title="Menu"/>
            <UncontrolledAccordion title="Users"/>
            <UncontrolledRating />
            <UncontrolledRating />
            <UncontrolledRating />
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
