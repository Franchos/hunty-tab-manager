import React, { FC } from "react";
import "../styles/tailwind.css";
import { createRoot } from "react-dom/client";

const Hunty: FC = () => (
  <div className="h-screen w-screen bg-base-200">
    <div className="bg-accent w-1/2 h-full"></div>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Hunty />);
