import './index.css'
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

const tag = <strong>Olá React</strong>
root.render(
  <div>
    {tag}
  </div>
);
