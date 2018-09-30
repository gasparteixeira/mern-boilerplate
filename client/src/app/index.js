import React from "react";
import { H1 } from "../components/Heading";
import { Button } from "../components/Button";
const App = () => {
  return (
    <div>
      <H1 text="I'm a headding text" />
      <Button color="primary" label="primary" />
      <Button color="secondary" label="secondary" />
      <Button outline color="secondary" label="outline" />
      <Button color="danger" label="danger" />
      <Button size="sm" color="success" label="success" />  
    </div>
  );
};
export default App;
