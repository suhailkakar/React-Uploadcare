import React from "react";
import { Widget } from "@uploadcare/react-widget";

export default function App() {
  return (
    <div>
      <p>
        <label htmlFor="file">Your file:</label>{" "}
        <Widget publicKey="YOUR_PUBLIC_KEY" id="file" />
      </p>
    </div>
  );
}
