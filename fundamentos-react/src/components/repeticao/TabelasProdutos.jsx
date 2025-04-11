import produtos from "../../data/produtos";
import "./TabelasProdutos.css";

export default (props) => {
  const ProdutosTable = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 == 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.name}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{ProdutosTable}</tbody>
      </table>
    </div>
  );
};
