import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <h1>Hello world</h1>
  );
}

const root = createRoot(document.body);
root.render(<App></App>)
