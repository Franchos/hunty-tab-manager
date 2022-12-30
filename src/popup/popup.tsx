import React, { FC, useEffect, useState } from "react";
import "../styles/tailwind.css";
import { createRoot } from "react-dom/client";
import Home from "./home";
import "../styles/global.css";

const Popup: FC = () => {
  return <Home />;
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Popup />);
