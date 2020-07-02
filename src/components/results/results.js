import React from 'react';
import ReactView from 'react-json-view';
import {IfRenderer,Then,Else} from '../if/index';
import './results.scss';


const Result = (props) => {
    return (
        <React.Fragment>
        <IfRenderer condition={props.loading}>
        <Then>
        <div className={`loading-${props.loading}`}></div>
        </Then>
        <Else>
        <section>
            <span className="count">{props.count}</span>
            <div className="method"><ReactView name='Headers' src={props.headerss}/></div>
            <div className="url"><ReactView name='Response' src={props.results}/></div>
        </section>
        </Else>
        </IfRenderer>
        
        </React.Fragment>
    );
}
export default Result;