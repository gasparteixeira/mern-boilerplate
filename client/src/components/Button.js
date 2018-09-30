import React from "react";
import { Button as Bt } from "reactstrap";

export const Button = props => (
    <Bt {...props}>{props.label}</Bt>
);