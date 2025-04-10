import "./index.css";
import { createRoot } from "react-dom/client";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro titulo="Situação do Aluno" aluno="Maguin" nota={9.3} />
  </div>
);
