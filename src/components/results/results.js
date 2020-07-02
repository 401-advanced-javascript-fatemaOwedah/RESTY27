import React from 'react';
import ReactView from 'react-json-view';

import './results.scss';


const Result = (props) => {
    return (
        <section className={`loading-${props.loading}`}>
            <span className="count">{props.count}</span>
            <div className="method"><ReactView name='Headers' src={props.headerss}/></div>
            <div className="url"><ReactView name='Response' src={props.results}/></div>
        </section>
    );
}
export default Result;