import React from "react";
import _ from "lodash";

export const H1 = props => {
    return (<h1>{!_.isNil(props.text) && props.text}</h1>)
};
export const H2 = props => {
    return (<h2>{!_.isNil(props.text) && props.text}</h2>)
};

export const H3 = props => {
    return (<h3>{!_.isNil(props.text) && props.text}</h3>)
};

export const H4 = props => {
    return (<h4>{!_.isNil(props.text) && props.text}</h4>)
};

export const H5 = props => {
    return (<h5>{!_.isNil(props.text) && props.text}</h5>)
};
