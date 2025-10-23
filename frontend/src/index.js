import React from "react";
import ReactDOM from "react-dom/client";
import app from "./main/App";
import registerServiceWorker from "./registerServiceWorker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APP />);

registerServiceWorker();