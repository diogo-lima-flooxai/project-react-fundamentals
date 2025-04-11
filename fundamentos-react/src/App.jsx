import "./App.css";

import Card from "./components/layout/Card";

import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro"/>
          <FamiliaMembro nome="Ana"/>
          <FamiliaMembro nome="Joao"/>
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={2} max={4} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parametro" color="#E8B71A">
        <ComParametro titulo="Situação do Aluno" aluno="Maguin" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
